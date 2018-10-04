import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-file-upload-modal',
  templateUrl: './confirm-file-upload-modal.component.html',
  styleUrls: ['./confirm-file-upload-modal.component.scss']
})
export class ConfirmFileUploadModalComponent {

  @Input() fileName: string;
  @Output() confirmSubmit = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  confirm() {
    this.confirmSubmit.emit();
  }
}
