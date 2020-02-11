import { TestBed } from '@angular/core/testing';

import { SimpleDataService } from './simple-data.service';

describe('SimpleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleDataService = TestBed.get(SimpleDataService);
    expect(service).toBeTruthy();
  });
});
