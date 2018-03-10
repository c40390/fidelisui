import { TestBed, inject } from '@angular/core/testing';

import { AlertDataService } from './alert-data.service';

describe('AlertDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertDataService]
    });
  });

  it('should ...', inject([AlertDataService], (service: AlertDataService) => {
    expect(service).toBeTruthy();
  }));
});
