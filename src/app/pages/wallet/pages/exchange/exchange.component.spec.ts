import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeComponent } from './exchange.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeChartComponent } from '@app/pages/wallet/pages/exchange/exchange-chart/exchange-chart.component';
import { MarketRowComponent } from '@app/pages/wallet/pages/exchange/market-row/market-row.component';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeComponent, ExchangeChartComponent, MarketRowComponent ],
      imports: [NgxChartsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
