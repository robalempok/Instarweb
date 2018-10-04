import { TestBed, inject } from '@angular/core/testing';

import { ActivityService } from '@app/core/services/activity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ActivityService], (service: ActivityService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve activities', inject([ActivityService], (service: ActivityService) => {
    service.getActivities().subscribe(
      activities => {
        expect(activities).toBeTruthy();
      }
    )
  }));
});
