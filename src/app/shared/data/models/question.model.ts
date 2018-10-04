import { OfferedAnswer } from '@app/shared/data/models/offered-answer.model';

export interface Question {
    activityId: number;
    offeredAnswers: OfferedAnswer[];
    questionText: string;
    questionType: number;
}
