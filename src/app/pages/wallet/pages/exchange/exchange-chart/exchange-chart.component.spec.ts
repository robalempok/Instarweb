import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeChartComponent } from './exchange-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ExchangeChartComponent', () => {
  let component: ExchangeChartComponent;
  let fixture: ComponentFixture<ExchangeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeChartComponent ],
      imports: [NgxChartsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeChartComponent);
    component = fixture.componentInstance;
    component.comparedCurrencies = ['INSTAR', 'BTC'];
    component.percentage = 1.35;
    component.values = [
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
