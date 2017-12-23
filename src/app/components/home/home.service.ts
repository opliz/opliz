import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class HomeService extends BaseService {

  urlChaptersApi : string = Config.apiUrl + '/webservice/manga/chapters/list?page=1&size=10';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getChaptesBySize() {
    var url = this.urlChaptersApi;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }
}
