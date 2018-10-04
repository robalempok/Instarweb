import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Select(WalletState.balance) balance$: Observable<number>;
  @Select(WalletState.eosAccountName) eosAccountName$: Observable<string>;

  multi = [
    {
      'name': 'Jun 11',
      'series': [
        {
          'name': 'Received',
          'value': 100
        },
        {
          'name': 'Transfer',
          'value': 20
        }
      ]
    },
    {
      'name': 'Jun 12',
      'series': [
        {
          'name': 'Received',
          'value': 300
        },
        {
          'name': 'Transfer',
          'value': 250
        }
      ]
    },
    {
      'name': 'Jun 13',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 14',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 15',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 16',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 17',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 18',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 19',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 20',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 21',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    },
    {
      'name': 'Jun 22',
      'series': [
        {
          'name': 'Received',
          'value': 10
        },
        {
          'name': 'Transfer',
          'value': 50
        }
      ]
    }
  ];

  colorScheme = {
    domain: ['#5277c1', '#60c5b1', '#C7B42C', '#AAAAAA']
  };

  transferAddress: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter(params => params.transfer))
      .subscribe(params => {
        this.transferAddress = params.transfer;
      });
  }

  yAxisTickFormatting(value: string) {
    return '$' + value;
  }
}
