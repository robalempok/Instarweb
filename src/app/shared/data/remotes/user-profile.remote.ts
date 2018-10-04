import { Activity } from '@app/shared/data/models';

export interface UserProfileRemote {
    activitiesTotal: number;
    email: string;
    passportId: number;
    rating: number;
    level: number;
    activities: Activity[];
    profilePicture: string;
    firstName: string;
    lastName: string;
    joined: Date;
    eosAccountName: string;
    shouldUpdatePassword: boolean;
}
