import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-completed',
  templateUrl: './top-completed.component.html',
  styleUrls: ['./top-completed.component.scss']
})
export class TopCompletedComponent {

  @Input() position: string;
  @Input() email: string;
  @Input() commission: number;

  constructor() { }
}
