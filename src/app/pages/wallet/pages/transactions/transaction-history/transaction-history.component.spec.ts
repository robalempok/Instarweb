import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistoryComponent } from './transaction-history.component';
import { TransactionRowComponent } from '@app/pages/wallet/pages/transactions/transaction-row/transaction-row.component';

describe('TransactionHistoryComponent', () => {
  let component: TransactionHistoryComponent;
  let fixture: ComponentFixture<TransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHistoryComponent, TransactionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
