import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiUtilService } from './api-util.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class NexposeService {
  private apiUtilService: ApiUtilService;

  constructor() {
  }

  healthCheck(): string {
    console.log(this.apiUtilService.get('health'));
    return JSON.stringify([{ 'connector': 'Nexpose Connector', 'healthcheck': 'Success', 'lastping': 'now' }])
  }
}
