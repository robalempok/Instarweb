import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss']
})
export class TransactionRowComponent implements OnInit {

  @Input() transactionType: number;
  @Input() amount: number;
  @Input() fee: number;
  @Input() date: Date;

  transactionLogo: string;
  time: string;
  dateString: string;

  constructor() { }

  ngOnInit(): void {
    const icon = this.transactionType === 0 ? 'receive-icon.svg' : 'transfer-icon.svg';
    this.transactionLogo = `assets/images/wallet/transaction/${icon}`;
    this.time = this.date.toTimeString().split(' ')[0];
    this.dateString = this.date.toDateString();

  }
}
