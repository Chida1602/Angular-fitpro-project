import { TestBed } from '@angular/core/testing';

import { ItemsfoodService } from './itemsfood.service';

describe('ItemsfoodService', () => {
  let service: ItemsfoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsfoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
