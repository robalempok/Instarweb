import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '@app/core/services/activity.service';
import { ToggleLoading } from '@app/core/state/app.state';
import { ActivityModalComponent } from '@app/pages/wallet/pages/activities/components/activity-modal/activity-modal.component';
import { ConfirmModalComponent } from '@app/pages/wallet/pages/activities/components/confirm-modal/confirm-modal.component';
import { SubscriptionModalComponent } from '@app/pages/wallet/pages/activities/components/subscription-modal/subscription-modal.component';
import { SuccessModalComponent } from '@app/pages/wallet/pages/activities/components/success-modal/success-modal.component';
import { SubmitActivity, SubmitSubscription, WalletState } from '@app/pages/wallet/state/wallet.state';
import { ActivityType } from '@app/shared/data/enums/activity-type.enum';
import { Activity } from '@app/shared/data/models';
import { SubmitPollRequest } from '@app/shared/data/requests';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { forkJoin, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  @Select(WalletState.surveys) surveys$: Observable<Activity[]>;
  @Select(WalletState.icos) icos$: Observable<Activity[]>;
  @Select(WalletState.completedActivities) completedActivities$: Observable<Activity[]>;
  referralReward: number;

  selectedTab = 0;
  activityType = ActivityType;
  activity: Activity;
  activityModal: NgbModalRef;
  private toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right' };


  constructor(
    private activityService: ActivityService,
    private modalService: NgbModal,
    private store: Store,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.referralReward = this.store.selectSnapshot(WalletState.referralReward);
    this.route.queryParams
      .pipe(filter(params => params.activity))
      .subscribe(params => {
        this.openActivity(Number(params.activity));
      });
  }

  selectTab(index: number) {
    this.selectedTab = index;
  }

  openActivity(id: number) {
    if (this.IsActivityCompleted(id)) {
      this.openCompletedActivity(id);
    } else {
      this.store.dispatch(new ToggleLoading()).subscribe();
      this.activityService.getActivityById(id).subscribe(
        activity => {
          this.activity = activity;
          const modalType = this.activity.type === ActivityType.ICO ? SubscriptionModalComponent : ActivityModalComponent;
          this.activityModal = this.modalService.open(modalType, { centered: true });
          this.activityModal.componentInstance.activity = activity;
          this.activityModal.componentInstance.submitActivity
            .subscribe(request => this.activity.type === ActivityType.ICO ? this.subscriptionSubmit() : this.pollSubmit(request));
          this.store.dispatch(new ToggleLoading()).subscribe();
        },
        _error => {
          this.store.dispatch(new ToggleLoading()).subscribe();
          this.toastr.error('There was an error loading the activity', 'Instar Wallet', this.toastOptions);
        }
      );
    }
  }

  subscriptionSubmit() {
    const confirmModal = this.modalService.open(ConfirmModalComponent, { centered: true, backdropClass: 'z-index-high' });
    confirmModal.componentInstance.reward = this.activity.reward;
    confirmModal.componentInstance.confirmSubmit.subscribe(() => {
      this.store.dispatch(new ToggleLoading()).subscribe();
      this.store.dispatch(new SubmitSubscription(this.activity.activityId)).subscribe(
        () => { },
        (error) => {
          this.store.dispatch(new ToggleLoading()).subscribe();
          this.activityModal.close();
          this.toastr.error(error, 'Instar Wallet', this.toastOptions);
        },
        () => {
          this.store.dispatch(new ToggleLoading()).subscribe();
          this.activityModal.close();
          confirmModal.close();
          const successModal = this.modalService.open(SuccessModalComponent, { centered: true });
          (<SuccessModalComponent>successModal.componentInstance).reward = this.activity.reward;
          (<SuccessModalComponent>successModal.componentInstance).referralReward = this.referralReward;
          (<SuccessModalComponent>successModal.componentInstance).activityId = this.activity.activityId;
        }
      );
    });
  }

  pollSubmit(request: SubmitPollRequest) {
    const confirmModal = this.modalService.open(ConfirmModalComponent, { centered: true, backdropClass: 'z-index-high' });
    confirmModal.componentInstance.reward = this.activity.reward;
    confirmModal.componentInstance.confirmSubmit.subscribe(() => {
      this.store.dispatch(new ToggleLoading()).subscribe();
      this.store.dispatch(new SubmitActivity(request)).subscribe(
        () => { },
        error => {
          this.store.dispatch(new ToggleLoading()).subscribe();
          this.activityModal.close();
          confirmModal.close();
          const toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right' };
          this.toastr.error(error, 'Instar Wallet', toastOptions);
        },
        () => {
          this.store.dispatch(new ToggleLoading()).subscribe();
          this.activityModal.close();
          confirmModal.close();
          const successModal = this.modalService.open(SuccessModalComponent, { centered: true });
          (<SuccessModalComponent>successModal.componentInstance).reward = this.activity.reward;
          (<SuccessModalComponent>successModal.componentInstance).referralReward = this.referralReward;
          (<SuccessModalComponent>successModal.componentInstance).activityId = this.activity.activityId;
        }
      );
    });
  }

  private IsActivityCompleted(activityId: number) {
    const completedActivities = this.store.selectSnapshot(WalletState.completedActivities);
    return !!completedActivities.find(activity => activity.activityId === activityId);
  }

  private openCompletedActivity(id: number) {
    this.store.dispatch(new ToggleLoading()).subscribe();
    forkJoin(this.activityService.getActivityById(id), this.activityService.getCompletedActivityById(id))
      .subscribe((result) => {
        this.activity = result['0'];
        const completedActivityResults = result['1'];
        const modalType = this.activity.type === ActivityType.ICO ? SubscriptionModalComponent : ActivityModalComponent;
        this.activityModal = this.modalService.open(modalType, { centered: true });
        this.activityModal.componentInstance.activity = this.activity;
        this.activityModal.componentInstance.fulfilledFormValues = completedActivityResults;
        this.store.dispatch(new ToggleLoading()).subscribe();
      });
  }
}
