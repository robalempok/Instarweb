import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor() { }

  goHome() {
    window.top.location.href = `${window.location.origin}/app`;
  }

}
