import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Activity } from '@app/shared/data/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as StringUtilities from '@app/shared/Utilities/string.utilities';


@Component({
  selector: 'app-subscription-modal',
  templateUrl: './subscription-modal.component.html',
  styleUrls: ['./subscription-modal.component.scss']
})
export class SubscriptionModalComponent implements OnInit {

  @Input() activity: Activity;
  @Output() submitActivity = new EventEmitter();
  @Input() fulfilledFormValues: { answers: number[] };
  activityInitials: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.activityInitials = StringUtilities.getInitials(this.activity.title);
  }

  subscribe() {
    this.submitActivity.emit();
  }
}
