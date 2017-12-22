import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpInterceptor } from '../common/services/HttpInterceptor';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class HeaderService extends BaseService {
  urlStatusApi : string = Config.apiUrl + '/webservice/manga/status';
  urlTypesApi : string = Config.apiUrl + '/webservice/manga/types';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getStatuses() {
    return this.http.get(this.urlStatusApi, this.getHeaders()).map((response: Response) => response.json());
  }

  getTypes() {
    return this.http.get(this.urlTypesApi, this.getHeaders()).map((response: Response) => response.json());
  }
}