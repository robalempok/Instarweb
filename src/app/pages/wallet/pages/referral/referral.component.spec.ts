import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralComponent } from './referral.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
import { TopCompletedComponent } from '@app/pages/wallet/pages/referral/top-completed/top-completed.component';
import { ReferralInfoComponent } from '@app/pages/wallet/pages/referral/referral-info/referral-info.component';

describe('ReferralComponent', () => {
  let component: ReferralComponent;
  let fixture: ComponentFixture<ReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralComponent, TopCompletedComponent, ReferralInfoComponent ],
      imports: [QRCodeModule, ClipboardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralComponent);
    component = fixture.componentInstance;
    component.referredFriends = [{
      referredEmail: 'test@test.com',
      completionDate: new Date(),
      createdDate: new Date(),
      reward: 4
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
