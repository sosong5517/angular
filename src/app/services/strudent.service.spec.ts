import { TestBed } from '@angular/core/testing';

import { StrudentService } from './strudent.service';

describe('StrudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrudentService = TestBed.get(StrudentService);
    expect(service).toBeTruthy();
  });
});
