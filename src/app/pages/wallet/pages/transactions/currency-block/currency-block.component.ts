import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from '@app/pages/wallet/pages/transactions/address-modal/address-modal.component';
import { TransferModalComponent } from '@app/pages/wallet/pages/transactions/transfer-modal/transfer-modal.component';

@Component({
  selector: 'app-currency-block',
  templateUrl: './currency-block.component.html',
  styleUrls: ['./currency-block.component.scss']
})
export class CurrencyBlockComponent implements OnInit {

  @Input() image: string;
  @Input() balance: number;
  @Input() currency: string;
  @Input() commission: number;
  @Input() address: string;
  @Input() transferAddress?: string;

  formattedBalance: string;
  decimalValues: number;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.formattedBalance = (Math.round(this.balance * 100) / 100).toFixed(2);


    if (this.transferAddress) {
      this.transferClicked(this.transferAddress);
    }
  }

  receiveClicked() {
    const modal = this.modalService.open(AddressModalComponent, { centered: true });
    (<AddressModalComponent>modal.componentInstance).address = this.address;
  }

  transferClicked(address?: string) {
    const modal = this.modalService.open(TransferModalComponent, { centered: true });
    (<TransferModalComponent>modal.componentInstance).balance = this.balance;
    (<TransferModalComponent>modal.componentInstance).currency = this.currency;
    (<TransferModalComponent>modal.componentInstance).commission = this.commission;
    (<TransferModalComponent>modal.componentInstance).address = address;
  }
}
