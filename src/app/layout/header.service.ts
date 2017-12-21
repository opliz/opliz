import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpInterceptor } from '../common/services/HttpInterceptor';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class HeaderService extends BaseService {
  urlStatus : string = Config.apiUrl + '/webservice/manga/status';
  urlTypes : string = Config.apiUrl + '/webservice/manga/types';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getStatuses() {
    return this.http.get(this.urlStatus, this.getHeaders()).map((response: Response) => response.json());
  }

  getTypes() {
    return this.http.get(this.urlTypes, this.getHeaders()).map((response: Response) => response.json());
  }
}