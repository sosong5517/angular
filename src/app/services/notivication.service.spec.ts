import { TestBed } from '@angular/core/testing';

import { NotivicationService } from './notivication.service';

describe('NotivicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotivicationService = TestBed.get(NotivicationService);
    expect(service).toBeTruthy();
  });
});
