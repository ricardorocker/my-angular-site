import { TestBed } from '@angular/core/testing';

import { UserGithubService } from './user-github.service';

describe('UserGithubService', () => {
  let service: UserGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
