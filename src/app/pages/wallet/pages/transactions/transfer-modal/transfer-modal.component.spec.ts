import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferModalComponent } from './transfer-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('TransferModalComponent', () => {
  let component: TransferModalComponent;
  let fixture: ComponentFixture<TransferModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferModalComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [NgbActiveModal, WalletService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
