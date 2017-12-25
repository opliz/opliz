import { Injectable } from '@angular/core';
import { Config } from '../../../config';
import { HttpInterceptor } from '../../../common/services/HttpInterceptor';
import { BaseService } from '../../../common/services/base.service';

@Injectable()
export class ChapterNormalViewerService extends BaseService {

  urlChapterApi : string = Config.apiUrl + '/webservice/manga/chapter?chapter_id=';
  urlRelatedStoriesApi : string = Config.apiUrl + '/webservice/manga/stories/related/chapter?size=7&chapter_id=';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getById(chapterId) {
    var url = this.urlChapterApi + chapterId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getRelatedStoriesById(chapterId) {
    var url = this.urlRelatedStoriesApi+chapterId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }
}
