import { Component } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {

  selectedTab = 0;

  currencies = ['INSTAR', 'BTC'];
  percentage = 1.35;
  multi = [
    {
      'name': 'BTC',
      'series': [
        {
          'name': '2010',
          'value': 7300000
        },
        {
          'name': '2011',
          'value': 8940000
        },
        {
          'name': '2012',
          'value': 2940000
        },
        {
          'name': '2013',
          'value': 3940000
        },
        {
          'name': '2014',
          'value': 1940000
        },
        {
          'name': '2015',
          'value': 9940000
        },
        {
          'name': '2016',
          'value': 5940000
        },
        {
          'name': '2017',
          'value': 5940000
        },
        {
          'name': '2018',
          'value': 8940000
        }
      ]
    }
  ];


  rowElements = [
    {
      image: 'assets/images/logo-token.svg',
      currencySymbol: 'INSTAR',
      currencyName: 'Insights Network',
      dayChange: 0.35,
      price: 1.86,
      dayVolume: 1000
    },
    {
      image: 'assets/images/wallet/currency/bitcoin.svg',
      currencySymbol: 'BTC',
      currencyName: 'Bitcoin',
      dayChange: 0.35,
      price: 1.86,
      dayVolume: 1000
    },
    {
      image: 'assets/images/wallet/currency/EOS.svg',
      currencySymbol: 'EOS',
      currencyName: 'Eosio',
      dayChange: 0.35,
      price: 1.86,
      dayVolume: 1000
    },
    {
      image: 'assets/images/wallet/currency/ethereum.svg',
      currencySymbol: 'ETH',
      currencyName: 'Ethereum',
      dayChange: 0.35,
      price: 1.86,
      dayVolume: 1000
    }
  ];

  constructor() { }

  selectTab(index: number) {
    this.selectedTab = index;
  }

}
