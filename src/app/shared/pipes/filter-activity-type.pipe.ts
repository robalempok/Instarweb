import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from '@app/shared/data/models';

@Pipe({name: 'filterActivityType'})
export class FilterActivityTypePipe implements PipeTransform {
  transform(activities: Activity[], type: number | number[]): Activity[] {
    if(type instanceof Array) {
        return activities.filter(activity => type.includes(activity.type));
    }
    return activities.filter(activity => activity.type === type);
  }
}
