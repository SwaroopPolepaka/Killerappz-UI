import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../app.config';


@Injectable()
export class ApiUtilService {
  private requestOptions: RequestOptions;

  constructor(private appConfig: AppConfig,
    private http: Http,
    private router: Router) {
  }

  // /**
  // * for future usage
  //  * Define request headers for every API call
  //  */
  // appendHeader(): Headers {
  // let headers = new Headers({'Content-Type': 'application/json'});
  // let token = this.loginService.getStoredToken();
  // if (token !== null) {
  //   headers.append("Authorization", token);
  // }
  // }
  //   return;
  // }

  /**
   * Define request Headers for every API call
   */
  getRequestOptions(requestMethod, url: string, urlParam?: URLSearchParams, body?: Object): RequestOptions {
    let options = new RequestOptions({
      method: requestMethod,
      url: this.appConfig.baseApiPath + url,
    });
    if (urlParam) {
      options = options.merge({ params: urlParam });
    }
    if (body) {
      options = options.merge({ body: JSON.stringify(body) });
    }
    return options;
  }

  /**
   * HTTP Get Method
   */
  get(url: string, urlParams?: URLSearchParams): Observable<any> {
    const requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
    return this.http.request(new Request(requestOptions))
      .map(resp => resp.json());
  }

}
