import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { ActivityService } from '@app/core/services/activity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { UserService } from '@app/core/services/user.service';
import { ToastrModule } from 'ngx-toastr';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
