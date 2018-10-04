import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstarRewardComponent } from './instar-reward.component';

describe('InstarRewardComponent', () => {
  let component: InstarRewardComponent;
  let fixture: ComponentFixture<InstarRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstarRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstarRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
