import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  @Input() reward: number;
  @Output() confirmSubmit = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  confirm() {
    this.confirmSubmit.emit();
  }

}
