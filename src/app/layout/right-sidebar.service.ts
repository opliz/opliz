import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpInterceptor } from '../common/services/HttpInterceptor';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class RightSidebarService extends BaseService {
  urlTypesApi : string = Config.apiUrl + '/webservice/manga/types';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getTypes() {
    return this.http.get(this.urlTypesApi, this.getHeaders()).map((response: Response) => response.json());
  }

}