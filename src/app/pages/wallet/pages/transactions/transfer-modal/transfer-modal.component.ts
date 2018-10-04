import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.scss']
})
export class TransferModalComponent implements OnInit {

  @Input() balance: number;
  @Input() currency: string;
  @Input() commission: number;
  @Input() address: string;

  memoDisabled = false;

  transferForm: FormGroup = this.fb.group({
    amount: ['', Validators.required],
    address: ['', Validators.required],
    memo: ['']
  });

  constructor(
    public activeModal: NgbActiveModal, private fb: FormBuilder, private walletService: WalletService, private toastr: ToastrService) { }

  ngOnInit() {
    if (this.address) {
      this.transferForm.patchValue({address : this.address});
    }
  }

  onSubmit() {
    const val = this.transferForm.value;
    this.walletService.transfer(val.address, val.amount, val.memo)
    .subscribe(
      _success => {
        this.toastr.success('Successfully executed transfer');
        this.activeModal.close();
      },
      error => this.toastr.error(error)
    );
  }
}
