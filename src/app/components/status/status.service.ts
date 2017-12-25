import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class StatusService extends BaseService {

  urlStoriesApi : string = Config.apiUrl + '/webservice/manga/status/stories?size=10&page=1&status_id=';
  urlTypeApi : string = Config.apiUrl + '/webservice/manga/status?status_id=';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getStoryByStatusId(statusId) {
    var url = this.urlStoriesApi + statusId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStatusByStatusId(statusId) {
    var url = this.urlTypeApi + statusId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

}
