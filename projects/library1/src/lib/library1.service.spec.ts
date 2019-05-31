import { TestBed } from '@angular/core/testing';

import { Library1Service } from './library1.service';

describe('Library1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Library1Service = TestBed.get(Library1Service);
    expect(service).toBeTruthy();
  });
});
