import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-chart',
  templateUrl: './exchange-chart.component.html',
  styleUrls: ['./exchange-chart.component.scss']
})
export class ExchangeChartComponent {

  @Input() comparedCurrencies: [string, string];
  @Input() percentage: number;
  @Input() values: any;

  view = undefined; // [700, 400];

  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#e46ea8', '#ec5555', '#C7B42C', '#AAAAAA']
  };
  autoscale = true;

  constructor() { }
}
