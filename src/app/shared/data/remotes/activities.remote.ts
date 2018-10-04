import { Activity } from '@app/shared/data/models';

export interface ActivitiesRemote {
    icos: Activity[];
    surveys: Activity[];
    completed: Activity[];
}
