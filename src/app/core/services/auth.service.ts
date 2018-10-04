import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRemote, SignUpRemote } from '@data/remotes';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginRemote> {
    return this.http.post<LoginRemote>(`${environment.backendEndpoint}/login`, {email, password});
  }

  signUp(firstName: string, lastName: string, email: string, referrerUrl?: string): Observable<SignUpRemote> {
    return this.http.post<SignUpRemote>(`${environment.backendEndpoint}/v2/signup`, {firstName, lastName, email, referrerUrl});
  }

  changePassword(oldPassword: string, newPassword: string, isSignUp: boolean) {
    return this.http.post(`${environment.backendEndpoint}/update/password`, {oldPassword, newPassword, isSignUp});
  }

  resetPassword(email: string) {
    return this.http.post(`${environment.backendEndpoint}/reset/password`, {email});
  }
}
