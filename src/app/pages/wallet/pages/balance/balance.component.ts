import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { BalanceChart, Balance } from '@app/shared/data/models';
import * as DateUtilities from '@app/shared/Utilities/date.utilities';
import * as StringUtilities from '@app/shared/Utilities/string.utilities';
import { getAverage } from '@app/shared/Utilities/number.utilities';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { WalletTimeRange } from '@app/shared/data/enums/wallet-time-range.enum';
import { ToggleLoading } from '@app/core/state/app.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  @Select(WalletState.balance) balance$: Observable<number>;
  currentBalance: number;
  timeRange = WalletTimeRange;
  selectedTimeRange: WalletTimeRange = undefined;
  chartDataLoading = false;
  balanceFeed = [
    {
      name: 'Instar',
      series: []
    }
  ];
  yScaleMax = undefined;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private walletService: WalletService, private store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        params => {
          if (params.range) {
            const range = StringUtilities.ToTitleCase(params.range);
            if (range in WalletTimeRange) {
              this.selectedTimeRange = WalletTimeRange[range];
            }
          }
          this.getFeed(this.selectedTimeRange, false);
        }
      );
  }

  getFeed(range?: WalletTimeRange, toggleLoading = true) {
    this.selectedTimeRange = range;
    if (toggleLoading) {
      this.store.dispatch(new ToggleLoading()).subscribe();
    }
    this.chartDataLoading = true;
    this.walletService.getBalanceFeed(range).subscribe(result => {
      this.chartDataLoading = false;
      const chartData: BalanceChart[] = this.getChartData(result.balances, result.startBalance, range);
      this.setBalanceFeed(chartData);
      if (toggleLoading) {
        this.store.dispatch(new ToggleLoading()).subscribe();
      }
    });
  }

  getChartData(balanceData: Balance[], startBalance: number, range?: WalletTimeRange): BalanceChart[] {
    this.yScaleMax = undefined;
    if (!range) {
      return balanceData.map(elem => {
        const date = new Date(elem.date);
        const dateString =  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return { name: new Date(dateString + ' ' + timeString), value: elem.balance };
      });
    }

    // Adjust scale
    let maxValue = 0;
    if (balanceData.length > 0) {
      maxValue = Math.max(...balanceData.map(elem => elem.balance));
    } else {
      maxValue = startBalance;
    }
    this.yScaleMax = maxValue * 1.5;

    const balance: {[key: number]: BalanceChart} = {};
    const chartData: BalanceChart[] = [];
    let limit = balanceData.length;
    let balanceName: (i: number) => string = (i) => balanceData[i].date;
    let filterDate: (date: Date) => number = (_date) => 0;
    const currentDate = new Date();
    switch (range) {
      case WalletTimeRange.Year: {
        limit = currentDate.getMonth() + 1;
        balanceName = (i) => `${DateUtilities.MONTHS[i]} ${currentDate.getFullYear()}`;
        filterDate = (date) => date.getMonth();
        break;
      }
      case WalletTimeRange.Month: {
        limit = currentDate.getDate() + 1;
        balanceName = (i) => `${i}`;
        filterDate = (date) => date.getDate();
        break;
      }
      case WalletTimeRange.Week: {
        limit = currentDate.getDay() + 1;
        balanceName = (i) => DateUtilities.getWeekDayName(i);
        filterDate = (date) => date.getDay();
        break;
      }
      case WalletTimeRange.Day: {
        limit = currentDate.getHours() + 1;
        balanceName = (i) => `${i % 12 || 12}:00 ${(i < 12 || i === 24) ? 'AM' : 'PM'}`;
        filterDate = (date) => date.getHours();
        break;
      }
      case WalletTimeRange.Hour: {
        limit = currentDate.getMinutes() + 1;
        balanceName = (i) => `${i}:00`;
        filterDate = (date) => date.getMinutes();
        break;
      }
    }
    // adjust startBalance to local timezone if required
    if (balanceData.length > 0) {
      const data = balanceData.filter(elem => {
        const date = filterDate(new Date(elem.date));
        return date <= limit;
      });
      if (!(data.length > 0)) {
        startBalance = balanceData[balanceData.length - 1].balance;
      }
    }

    for (let i = 0; i < limit; i++) {
      balance[i] = { name: balanceName(i), value: 0 };
      const values = balanceData.filter(elem => filterDate(new Date(elem.date)) === i);
      if (!(values.length > 0)) {
        if (i === 0) {
          balance[i].value = startBalance;
        } else {
          const priorBalance = balance[i - 1];
          balance[i].value = priorBalance.max || priorBalance.value;
        }
        chartData.push(balance[i]);
        continue;
      }
      const currentBalance: number[] = values.map(value => value.balance);
      const average = getAverage(currentBalance);
      const min = Math.min(...currentBalance);
      const max = Math.max(...currentBalance);
      balance[i].value = average;
      balance[i].min = min;
      balance[i].max = max;
      chartData.push(balance[i]);
    }
    return chartData;
  }

  setBalanceFeed(balances: BalanceChart[]) {
    this.balanceFeed[0].series = balances;
    // trigger change
    this.balanceFeed = [...this.balanceFeed];
  }
}
