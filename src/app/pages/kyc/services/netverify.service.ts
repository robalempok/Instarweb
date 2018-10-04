import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NetVerifyRemote } from '@app/shared/data/remotes/netverify.remote';

@Injectable()
export class NetverifyService {

  constructor(private http: HttpClient) { }

  getAuthorizationToken() {
    // const baseUrl = window.location.origin;
    const baseUrl = 'http://example.com';
    const successUrl = `${baseUrl}/kyc/success`;
    const errorUrl = `${baseUrl}/kyc/error`;
    return this.http.post<NetVerifyRemote>(`${environment.backendEndpoint}/netverify/token`, {successUrl: successUrl, errorUrl: errorUrl});
  }
}
