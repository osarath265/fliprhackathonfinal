import { TestBed } from '@angular/core/testing';

import { BoardmanagerService } from './boardmanager.service';

describe('BoardmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardmanagerService = TestBed.get(BoardmanagerService);
    expect(service).toBeTruthy();
  });
});
