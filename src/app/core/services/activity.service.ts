import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Activity } from '@data/models';
import { ActivitiesRemote } from '@data/remotes';
import { SubmitPollRequest } from '@app/shared/data/requests/submit-poll.request';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get<ActivitiesRemote>(`${environment.backendEndpoint}/activities`);
  }

  getActivityById(id: number) {
    return this.http.get<Activity>(`${environment.backendEndpoint}/activity/${id}`);
  }

  getCompletedActivityById(id: number) {
    return this.http.get<{ answers: number[] }>(`${environment.backendEndpoint}/activity/${id}/answers`);
  }

  submitActivity(request: SubmitPollRequest) {
    return this.http.post(`${environment.backendEndpoint}/complete/poll`, request);
  }

  submitSubscription(activityId: number) {
    return this.http.post(`${environment.backendEndpoint}/confirm/transaction`, {activityId});
  }
}
