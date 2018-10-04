import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Activity } from '@app/shared/data/models';

@Component({
  selector: 'app-refer-friend-modal',
  templateUrl: './refer-friend-modal.component.html',
  styleUrls: ['./refer-friend-modal.component.scss']
})
export class ReferFriendModalComponent {

  @Input() activity: Activity;

  constructor(public activeModal: NgbActiveModal) { }

}
