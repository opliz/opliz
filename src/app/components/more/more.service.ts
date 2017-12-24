import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class MoreService extends BaseService {

  urlChaptersApi : string = Config.apiUrl + '/webservice/manga/chapters/list?size=10&page=';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getChaptesBySize(page) {
    page++;
    var url = this.urlChaptersApi + page;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

}
