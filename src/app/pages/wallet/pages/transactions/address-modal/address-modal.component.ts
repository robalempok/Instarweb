import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent {

  @Input() address: string;

  constructor(public activeModal: NgbActiveModal) { }

  get qrUrl(): string {
    return `${window.location.origin}/app/wallet?transfer=${this.address}`;
  }
}
