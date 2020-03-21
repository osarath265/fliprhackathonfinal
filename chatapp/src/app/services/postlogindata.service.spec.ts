import { TestBed } from '@angular/core/testing';

import { PostlogindataService } from './postlogindata.service';

describe('PostlogindataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostlogindataService = TestBed.get(PostlogindataService);
    expect(service).toBeTruthy();
  });
});
