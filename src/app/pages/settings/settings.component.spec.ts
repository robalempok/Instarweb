import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { UserInfoComponent } from '@app/pages/settings/components/user-info/user-info.component';
import { SideBarComponent } from '@app/pages/settings/components/side-bar/side-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '@app/core/state/auth.state';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '@app/core/services/user.service';
import { ActivityService } from '@app/core/services/activity.service';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { AuthService } from '@app/core/services/auth.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent, UserInfoComponent, SideBarComponent ],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([
        AuthState,
        WalletState
      ]),
      ToastrModule.forRoot(),
      RouterTestingModule,
      ],
      providers: [UserService, ActivityService, WalletService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
