import { TestBed } from '@angular/core/testing';

import { DiettypeService } from './diettype.service';

describe('DiettypeService', () => {
  let service: DiettypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiettypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
