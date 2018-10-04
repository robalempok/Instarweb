import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as StringUtilities from '@app/shared/Utilities/string.utilities';

@Component({
  selector: 'app-activity-row',
  templateUrl: './activity-row.component.html',
  styleUrls: ['./activity-row.component.scss']
})
export class ActivityRowComponent implements OnInit {

  @Input() id: number;
  @Input() type: number;
  @Input() title: string;
  @Input() description: string;
  @Input() requester: string;
  @Input() reward: number;
  @Output() openActivity = new EventEmitter<number>();
  activityInitials: string;

  constructor() { }

  ngOnInit() {
    this.activityInitials = StringUtilities.getInitials(this.title);
  }

  open() {
    this.openActivity.emit(this.id);
  }

}
