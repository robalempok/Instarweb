import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesComponent } from './activities.component';
import { ActivityService } from '@app/core/services/activity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { NgxsModule } from '@ngxs/store';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '@app/core/services/user.service';
import { ActivityRowComponent } from '@app/pages/wallet/pages/activities/components/activity-row/activity-row.component';
import { InstarRewardComponent } from '@app/pages/wallet/pages/activities/components/instar-reward/instar-reward.component';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesComponent, ActivityRowComponent, InstarRewardComponent ],
      imports: [HttpClientTestingModule,  NgxsModule.forRoot([
        WalletState
      ]),
      ToastrModule.forRoot(),
      RouterTestingModule,
      ],
      providers: [ActivityService, WalletService, UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
