import { TestBed, inject } from '@angular/core/testing';

import { ApiJiraService } from './api-jira.service';

describe('ApiJiraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiJiraService]
    });
  });

  it('should be created', inject([ApiJiraService], (service: ApiJiraService) => {
    expect(service).toBeTruthy();
  }));
});
