import { TestBed } from '@angular/core/testing';

import { JavaGeneratorService } from './java-generator.service';

describe('JavaGeneratorService', () => {
  let service: JavaGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
