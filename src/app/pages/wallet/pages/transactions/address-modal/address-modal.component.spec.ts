import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressModalComponent } from './address-modal.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';

describe('AddressModalComponent', () => {
  let component: AddressModalComponent;
  let fixture: ComponentFixture<AddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressModalComponent ],
      imports: [ClipboardModule, QRCodeModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
