import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent {

  @Input() url: string;

  constructor(public activeModal: NgbActiveModal) { }

}
