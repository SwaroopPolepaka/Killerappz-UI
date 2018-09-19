import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable()
export class StatsService {

  constructor(private http: HttpClient, private appConfig: AppConfig ) { }

  getStats() {
    const httpParams = new HttpParams().set('org_id', '1');
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams().set('org_id', '1'); // Create new HttpParams
    return this.http.post(proxy + this.appConfig.baseApiPath + 'stats', {'org_id' : '1'} ).map((res: Response) => res);

  }
}
