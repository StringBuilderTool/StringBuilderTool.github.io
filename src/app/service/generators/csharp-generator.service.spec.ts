import { TestBed } from '@angular/core/testing';

import { CsharpGeneratorService } from './csharp-generator.service';

describe('CsharpGeneratorService', () => {
  let service: CsharpGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsharpGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
