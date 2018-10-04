import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { UserService } from '@app/core/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([]),
      ToastrModule.forRoot(),
      RouterTestingModule,
      ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
