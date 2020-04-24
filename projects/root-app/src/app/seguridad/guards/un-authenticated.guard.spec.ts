import { TestBed, async, inject } from '@angular/core/testing';

import { UnAuthenticatedGuard } from './un-authenticated.guard';
import { HttpClientModule } from '@angular/common/http';

describe('UnAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthenticatedGuard],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should ...', inject([UnAuthenticatedGuard], (guard: UnAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
