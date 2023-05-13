import { TestBed } from '@angular/core/testing';

import { DietPlanService } from './diet-plan.service';

describe('DietPlanService', () => {
  let service: DietPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
