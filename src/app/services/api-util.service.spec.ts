import { TestBed, inject, async } from '@angular/core/testing';
import { ApiUtilService } from './api-util.service';

describe('ApiUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUtilService]
    });
  });

  it('should be created', async(inject([ApiUtilService], (service: ApiUtilService) => {
    expect(service).toBeTruthy();
  })));
});
