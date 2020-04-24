import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('LoginService', () => {

  beforeEach(() => TestBed.configureTestingModule({ providers: [HttpClient], imports: [HttpClientModule] }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
