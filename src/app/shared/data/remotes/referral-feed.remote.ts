import { Referral } from '@app/shared/data/models/referral';

export interface ReferralFeedRemote {
    referralLink: string;
    referralReward: number;
    referredFriends: Referral[];
    latestReferrals: Referral[];
}
