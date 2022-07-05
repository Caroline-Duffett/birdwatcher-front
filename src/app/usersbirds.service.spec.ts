import { TestBed } from '@angular/core/testing';

import { UsersbirdsService } from './usersbirds.service';

describe('UsersbirdsService', () => {
  let service: UsersbirdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersbirdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
