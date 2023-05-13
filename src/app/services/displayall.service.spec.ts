import { TestBed } from '@angular/core/testing';

import { DisplayallService } from './displayall.service';

describe('DisplayallService', () => {
  let service: DisplayallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
