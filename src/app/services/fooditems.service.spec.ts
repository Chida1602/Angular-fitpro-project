import { TestBed } from '@angular/core/testing';

import { FooditemsService } from './fooditems.service';

describe('FooditemsService', () => {
  let service: FooditemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooditemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
