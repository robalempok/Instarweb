import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {

  entries = [
    {
      transactionType: 0,
      amount: 5,
      fee: 3,
      date: new Date()
    },
    {
      transactionType: 1,
      amount: 100,
      fee: 20,
      date: new Date()
    },
    {
      transactionType: 0,
      amount: 24,
      fee: 12,
      date: new Date()
    }
  ];

  constructor() { }

}
