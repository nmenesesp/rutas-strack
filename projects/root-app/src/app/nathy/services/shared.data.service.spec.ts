import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shared.data.service';

describe('Shared.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedDataService = TestBed.get(SharedDNataService);
    expect(service).toBeTruthy();
  });
});
