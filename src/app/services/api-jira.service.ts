import { Injectable } from '@angular/core';
import{Http,Headers,Response}from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiJiraService {

  private baseUrl : string ='https://jira.atlassian.com/rest/api/2/search?jql=project=JRAServer&maxResults=30';
  constructor(private _http :Http){}
  getService(){
      const header = new Headers({'Content-Type':'application/json'});
      return this._http.get(this.baseUrl,{headers :header}).pipe(map(result =>result.json()));
  }   

}
