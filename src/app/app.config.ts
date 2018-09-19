import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {
  public locale = 'en-US';

  // API Related configs
  public apiPort = '8080';
  public apiProtocol= 'http:';
  public apiHostName = '159.65.153.208';
  public baseApiPath: string;

  constructor() {
    if (this.apiProtocol === undefined) {
      this.apiProtocol = window.location.protocol;
    }
    if (this.apiHostName === undefined) {
      this.apiHostName = window.location.hostname;
    }
    if (this.apiPort === undefined) {
      this.apiPort = window.location.port;
    }
    this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort + '/';
    if (this.locale === undefined) {
      this.locale = navigator.language;
    }
  }
}
