import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareModalComponent } from '@app/pages/wallet/components/share-modal/share-modal.component';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {

  @Input() activityId: number;
  @Input() referralReward: number;
  @Input() reward: number;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  openShareModal() {
    const shareModal = this.modalService.open(ShareModalComponent, {centered: true});
    (<ShareModalComponent>shareModal.componentInstance).url = `${window.location.origin}/app/activities?activity=${this.activityId}`;
    this.activeModal.dismiss();
  }

}
