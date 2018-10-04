import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionModalComponent } from './subscription-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InstarRewardComponent } from '@app/pages/wallet/pages/activities/components/instar-reward/instar-reward.component';

describe('SubscriptionModalComponent', () => {
  let component: SubscriptionModalComponent;
  let fixture: ComponentFixture<SubscriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionModalComponent, InstarRewardComponent ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionModalComponent);
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
