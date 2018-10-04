import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instar-reward',
  templateUrl: './instar-reward.component.html',
  styleUrls: ['./instar-reward.component.scss']
})
export class InstarRewardComponent implements OnInit {

  @Input() amount: number;

  constructor() { }

  ngOnInit() {
  }

}
