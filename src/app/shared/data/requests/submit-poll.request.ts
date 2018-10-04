export interface SubmitPollRequest {
    activityId: number;
    answers: { offeredAnswerId: number }[];
}
