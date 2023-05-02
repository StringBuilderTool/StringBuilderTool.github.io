import { TestBed } from '@angular/core/testing';

import { CppGeneratorService } from './cpp-generator.service';

describe('CppGeneratorService', () => {
  let service: CppGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CppGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
