import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRowComponent } from './activity-row.component';
import { InstarRewardComponent } from '@app/pages/wallet/pages/activities/components/instar-reward/instar-reward.component';

describe('ActivityRowComponent', () => {
  let component: ActivityRowComponent;
  let fixture: ComponentFixture<ActivityRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityRowComponent, InstarRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
