import { TestBed } from '@angular/core/testing';

import { ForpassService } from './forpass.service';

describe('ForpassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForpassService = TestBed.get(ForpassService);
    expect(service).toBeTruthy();
  });
});
