import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityModalComponent } from './activity-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InstarRewardComponent } from '@app/pages/wallet/pages/activities/components/instar-reward/instar-reward.component';

describe('ActivityModalComponent', () => {
  let component: ActivityModalComponent;
  let fixture: ComponentFixture<ActivityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityModalComponent, InstarRewardComponent ],
      imports: [ReactiveFormsModule, NgbModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityModalComponent);
    component = fixture.componentInstance;
    component.activity = {
      activityId: 1,
      activityStatus: 1,
      answered: 1,
      confirmMessage: 'Confirm message',
      description: 'My Description',
      largeImgUrl: '',
      payout: 4,
      questions: [],
      requesterId: 4,
      requesterName: 'Instar',
      requesterRating: 4,
      responsesTarget: 4,
      reward: 4,
      shareMessage: 'Please share',
      smallImgUrl: '',
      status: 1,
      subtitle: 'My subtitle',
      title: 'My title',
      type: 0,
      uniqueShareUrl: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
