import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyBlockComponent } from '@app/pages/wallet/pages/transactions/currency-block/currency-block.component';
import { TransactionHistoryComponent } from '@app/pages/wallet/pages/transactions/transaction-history/transaction-history.component';
import { TransactionRowComponent } from '@app/pages/wallet/pages/transactions/transaction-row/transaction-row.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsComponent, CurrencyBlockComponent, TransactionHistoryComponent, TransactionRowComponent ],
      imports: [NgxChartsModule, BrowserAnimationsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
