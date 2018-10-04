import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletComponent } from './wallet.component';
import { SideBarComponent } from '@app/pages/wallet/components/side-bar/side-bar.component';
import { BannerComponent } from '@app/pages/wallet/components/banner/banner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { UserService } from '@app/core/services/user.service';
import { ActivityService } from '@app/core/services/activity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WalletService } from '@app/pages/wallet/services/wallet.service';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletComponent, SideBarComponent, BannerComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        NgxsModule.forRoot([
          WalletState
        ])
      ],
      providers: [ ActivityService, WalletService, UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
