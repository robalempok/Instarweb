import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { UserProfileRemote } from '@app/shared/data/remotes/user-profile.remote';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get<UserProfileRemote>(`${environment.backendEndpoint}/v2/user/profile`);
  }

  updateProfilePicture(profilePicture: File) {
    const fd = new FormData();
    fd.append('image', profilePicture, profilePicture.name);
    return this.http.post(`${environment.backendEndpoint}/update/picture`, fd);
  }

  updateUser(userId: number, firstName?: string, lastName?: string) {
    return this.http.put(`${environment.backendEndpoint}/user/${userId}`, {firstName, lastName});
  }

  changeEmail(newEmail: string) {
    return this.http.post(`${environment.backendEndpoint}/update/email`, {newEmail});
  }
}
