import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRowComponent } from './market-row.component';

describe('MarketRowComponent', () => {
  let component: MarketRowComponent;
  let fixture: ComponentFixture<MarketRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
