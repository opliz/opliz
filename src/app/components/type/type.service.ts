import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class TypeService extends BaseService {

  urlStoriesApi : string = Config.apiUrl + '/webservice/manga/type/stories?size=10&page=1&type_id=';
  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getStoryByTypeId(typeId) {
    var url = this.urlStoriesApi+typeId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

}
