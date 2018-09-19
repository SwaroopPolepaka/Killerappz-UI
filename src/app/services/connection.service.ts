import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ConnectionService {

  constructor(private appConfig: AppConfig,
    private http: Http) {
  }
  connection(body: any) {
    delete body.state;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // , 'Access-Control-Allow-Origin': 'http://localhost:4200'
    const options = new RequestOptions({ headers: headers });
    return this.http.post(proxy + this.appConfig.baseApiPath + 'updatecredentials', body, options).map((res: Response) => res.json());
  }
  deleteConnection() {
    localStorage.removeItem('connectors');
    localStorage.removeItem('stats');
    localStorage.removeItem('formData');
  }
}
