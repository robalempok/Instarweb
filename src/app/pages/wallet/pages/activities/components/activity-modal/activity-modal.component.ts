import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Activity } from '@app/shared/data/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubmitPollRequest } from '@app/shared/data/requests/submit-poll.request';
import * as StringUtilities from '@app/shared/Utilities/string.utilities';


@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.component.html',
  styleUrls: ['./activity-modal.component.scss']
})
export class ActivityModalComponent implements OnInit {

  @Input() activity: Activity;
  @Input() fulfilledFormValues: { answers: number[] };
  @Output() submitActivity = new EventEmitter<SubmitPollRequest>();
  activityInitials: string;

  page = 1;
  activityForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.activityInitials = StringUtilities.getInitials(this.activity.title);
    const group = {};
    this.activity.questions.forEach((question) => {
      const questionId = question.offeredAnswers[0].questionId;
      group[questionId] = new FormControl('', Validators.required);
    });
    this.activityForm = new FormGroup(group);
  }

  onSubmit() {
    const request = this.formToRequest(this.activityForm.value);
    this.submitActivity.emit(request);
  }

  private formToRequest(form: any): SubmitPollRequest {
    const answers: { offeredAnswerId: number }[] = [];
    Object.values(form).forEach((value) => {
      answers.push({
        offeredAnswerId: Number(value)
      });
    });
    const request: SubmitPollRequest = {
      activityId: this.activity.activityId,
      answers: answers
    };
    return request;
  }
}
