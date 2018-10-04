import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFriendModalComponent } from './refer-friend-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReferFriendModalComponent', () => {
  let component: ReferFriendModalComponent;
  let fixture: ComponentFixture<ReferFriendModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferFriendModalComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferFriendModalComponent);
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
