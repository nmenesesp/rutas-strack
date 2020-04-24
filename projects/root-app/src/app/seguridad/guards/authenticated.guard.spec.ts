import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticatedGuard } from './authenticated.guard';
import { HttpClientModule } from '@angular/common/http';

describe('AuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedGuard],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should ...', inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
