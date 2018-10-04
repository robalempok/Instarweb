import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '@app/core/state/auth.state';
import { AuthService } from '@app/core/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '@app/pages/home/components/header/header.component';
import { FooterComponent } from '@app/pages/home/components/footer/footer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeaderComponent, FooterComponent ],
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([
          AuthState
        ])
      ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
