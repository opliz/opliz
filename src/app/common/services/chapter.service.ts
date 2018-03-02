import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from './base.service';

@Injectable()
export class ChapterService extends BaseService {

  urlChaptersApi : string = Config.apiUrl + '/webservice/manga/all-chapters?page=1&size=10';
  urlMoreChaptersApi : string = Config.apiUrl + '/webservice/manga/all-chapters?size=10&page=';
  urlChapterApi : string = Config.apiUrl + '/webservice/manga/chapter?chapter_id=';
  urlTopApi : string = Config.apiUrl + '/webservice/manga/top-chapters-in-week';

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

  getTopChapters() {
    return this.http.get(this.urlTopApi, this.getHeaders()).map((response: Response) => response.json());
  }

  getChaptesBySize() {
    var url = this.urlChaptersApi;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getMoreChaptesBySize(page) {
    page++;
    var url = this.urlMoreChaptersApi + page;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

}
