import { Question } from '@app/shared/data/models/question.model';

export interface Activity {
    activityId: number;
    activityStatus: number;
    answered: number;
    criteria: number[];
    confirmMessage: string;
    description: string;
    largeImgUrl: string;
    payout: number;
    questions?: Question[];
    requesterId?: number;
    requesterName: string;
    requesterRating: number;
    responsesTarget: number;
    reward: number;
    shareMessage: string;
    smallImgUrl: string;
    status: number;
    sha: string;
    subtitle: string;
    title: string;
    type: number;
    uniqueShareUrl: string;
}
