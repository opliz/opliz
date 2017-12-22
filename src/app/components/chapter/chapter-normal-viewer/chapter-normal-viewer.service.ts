import { Injectable } from '@angular/core';
import { Config } from '../../../config';
import { HttpInterceptor } from '../../../common/services/HttpInterceptor';
import { BaseService } from '../../../common/services/base.service';

@Injectable()
export class ChapterNormalViewerService extends BaseService {

  urlChapterApi : string = Config.apiUrl + '/webservice/manga/chapter?chapter_id=';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getById(id) {
    var url = this.urlChapterApi + id;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }
}
