import { TestBed, inject } from '@angular/core/testing';

import { TokenizingService } from './tokenizing.service';

describe('TokenizingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenizingService]
    });
  });

  it('should be created', inject([TokenizingService], (service: TokenizingService) => {
    expect(service).toBeTruthy();
  }));
});
