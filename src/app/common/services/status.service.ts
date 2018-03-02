import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from './base.service';

@Injectable()
export class StatusService extends BaseService {
  urlStatusesApi : string = Config.apiUrl + '/webservice/manga/statuses';
  urlStatusByIdApi : string = Config.apiUrl + '/webservice/manga/status?status_id=';
  urlStatusByUrlApi : string = Config.apiUrl + '/webservice/manga/status-by-url?status_url=';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getStatusByStatusId(statusId) {
    var url = this.urlStatusByIdApi + statusId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStatusByStatusUrl(statusUrl) {
    var url = this.urlStatusByUrlApi + statusUrl;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStatuses() {
    return this.http.get(this.urlStatusesApi, this.getHeaders()).map((response: Response) => response.json());
  }

}
