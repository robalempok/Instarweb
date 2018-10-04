import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const JumioClient: any;

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const authToken: string = this.route.snapshot.data.authToken;
    this.initNetVerify(authToken);
  }

  private initNetVerify(authorizationToken: string) {
    JumioClient.setVars({
      authorizationToken: authorizationToken,
      clientHeight: 'responsive',
      clientWidth: 'responsive'
    }).initVerify('JUMIOIFRAME');
  }
}
