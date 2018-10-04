import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '@app/components/wallet-header/wallet-header.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '@app/core/state/auth.state';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@app/core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule, NgxsModule.forRoot([
        AuthState
      ]),
      HttpClientModule],
      providers: [
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
