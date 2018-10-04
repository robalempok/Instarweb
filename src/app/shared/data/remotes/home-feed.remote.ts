import { Activity, Gamification } from '@data/models';

export interface HomeFeedRemote {
    activities: Activity[];
    balance: number;
    gamification: Gamification;
    kycStatus: number;
}
