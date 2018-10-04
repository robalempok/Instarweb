import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule } from '@ngxs/store';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceComponent ],
      imports: [
        NgxChartsModule,
        HttpClientTestingModule,
        NgxsModule.forRoot([]),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [WalletService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
