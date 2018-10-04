import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralInfoComponent } from './referral-info.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';

describe('ReferralInfoComponent', () => {
  let component: ReferralInfoComponent;
  let fixture: ComponentFixture<ReferralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralInfoComponent ],
      imports: [QRCodeModule, ClipboardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
