import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-market-row',
  templateUrl: './market-row.component.html',
  styleUrls: ['./market-row.component.scss']
})
export class MarketRowComponent {

  @Input() image: string;
  @Input() currencySymbol: string;
  @Input() currencyName: string;
  @Input() dayChange: number;
  @Input() price: number;
  @Input() dayVolume: number;


  constructor() { }

}
