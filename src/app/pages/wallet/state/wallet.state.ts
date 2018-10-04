import { ActivityService } from '@app/core/services/activity.service';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { KycStatus } from '@app/shared/data/enums';
import { ActivitiesRemote } from '@app/shared/data/remotes/activities.remote';
import { ReferralFeedRemote } from '@app/shared/data/remotes/referral-feed.remote';
import { SubmitPollRequest } from '@app/shared/data/requests/submit-poll.request';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import { UserService } from '@app/core/services/user.service';

export interface WalletStateModel {
    balance: number;
    activities: ActivitiesRemote;
    kycStatus: KycStatus;
    referralFeed: ReferralFeedRemote;
    userId: number;
    email: string;
    profilePicture: string;
    firstName: string;
    lastName: string;
    joined: Date;
    level: number;
    rating: number;
    eosAccountName: string;
    shouldUpdatePassword: boolean;
}

export class LoadWallet {
    static readonly type = '[Wallet] Load Wallet';
}

export class SubmitActivity {
    static readonly type = '[Wallet] Submit Activity';
    constructor(public request: SubmitPollRequest) { }
}

export class SubmitSubscription {
    static readonly type = '[Wallet] Submit Subscription';
    constructor(public activityId: number) { }
}

export class UpdateUserInfo {
    static readonly type = '[Wallet] Update User Info';
    constructor(public firstName?: string, public lastName?: string) { }
}

export class UpdateEmail {
    static readonly type = '[Wallet] Update email';
    constructor(public email: string) { }
}

@State<WalletStateModel>({
    name: 'wallet'
})
export class WalletState {

    @Selector() static activities(state: WalletStateModel) {
        return [...state.activities.surveys, ...state.activities.icos, ...state.activities.completed]; 
    }
    @Selector() static surveys(state: WalletStateModel) { return state.activities.surveys; }
    @Selector() static icos(state: WalletStateModel) { return state.activities.icos; }
    @Selector() static completedActivities(state: WalletStateModel) { return state.activities.completed; }
    @Selector() static balance(state: WalletStateModel) { return state.balance; }
    @Selector() static kycStatus(state: WalletStateModel) { return state.kycStatus; }
    @Selector() static referralFeed(state: WalletStateModel) { return state.referralFeed; }
    @Selector() static email(state: WalletStateModel) { return state.email; }
    @Selector() static names(state: WalletStateModel) { return { firstName: state.firstName, lastName: state.lastName }; }
    @Selector() static userId(state: WalletStateModel) { return state.userId; }
    @Selector() static joined(state: WalletStateModel) { return state.joined; }
    @Selector() static level(state: WalletStateModel) { return state.level; }
    @Selector() static rating(state: WalletStateModel) { return state.rating; }
    @Selector() static profilePicture(state: WalletStateModel) { return state.profilePicture; }
    @Selector() static referralReward(state: WalletStateModel) { return state.referralFeed.referralReward; }
    @Selector() static eosAccountName(state: WalletStateModel) { return state.eosAccountName; }
    @Selector() static shouldUpdatePassword(state: WalletStateModel) { return state.shouldUpdatePassword; }

    constructor(private activityService: ActivityService, private walletService: WalletService, private userService: UserService) { }

    @Action(LoadWallet)
    loadWallet({ patchState }: StateContext<WalletStateModel>, payload: LoadWallet) {
        return forkJoin(
            this.userService.getUserProfile(),
            this.walletService.getHomeFeed(),
            this.activityService.getActivities(),
            this.walletService.getReferralFeed())
            .pipe(
                tap(
                    result => {
                        return patchState({
                            email: result['0'].email,
                            userId: result['0'].passportId,
                            profilePicture: result['0'].profilePicture,
                            firstName: result['0'].firstName,
                            lastName: result['0'].lastName,
                            activities: result['2'],
                            balance: result['1'].balance,
                            kycStatus: result['1'].kycStatus,
                            referralFeed: result['3'],
                            joined: result['0'].joined,
                            level: result['0'].level,
                            rating: result['0'].rating,
                            eosAccountName: result['0'].eosAccountName,
                            shouldUpdatePassword: result['0'].shouldUpdatePassword
                        });
                    }
                )
            );
    }

    @Action(SubmitActivity)
    submitActivity({ dispatch }: StateContext<WalletStateModel>, payload: SubmitActivity) {
        return this.activityService.submitActivity(payload.request).pipe(flatMap(() => dispatch(new LoadWallet())));
    }

    @Action(SubmitSubscription)
    submitSubscription({ dispatch }: StateContext<WalletStateModel>, payload: SubmitSubscription) {
        return this.activityService.submitSubscription(payload.activityId).pipe(flatMap(() => dispatch(new LoadWallet())));
    }

    @Action(UpdateUserInfo)
    UpdateUserInfo({ getState, dispatch }: StateContext<WalletStateModel>, payload: UpdateUserInfo) {
        return this.userService.updateUser(getState().userId, payload.firstName, payload.lastName)
            .pipe((flatMap(() => dispatch(new LoadWallet()))));
    }

    @Action(UpdateEmail)
    updateEmail({dispatch}: StateContext<WalletStateModel>, payload: UpdateEmail) {
        return this.userService.changeEmail(payload.email)
        .pipe(flatMap(() => dispatch(new LoadWallet())));
    }
}
