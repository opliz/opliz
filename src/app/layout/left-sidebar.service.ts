import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpInterceptor } from '../common/services/HttpInterceptor';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class LeftSidebarService extends BaseService {
  urlTopApi : string = Config.apiUrl + '/webservice/manga/chapters/top';
  urlPopularApi : string = Config.apiUrl + '/webservice/manga/stories/popular';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getTopChapters() {
    return this.http.get(this.urlTopApi, this.getHeaders()).map((response: Response) => response.json());
  }

  getPopularStories() {
    return this.http.get(this.urlPopularApi, this.getHeaders()).map((response: Response) => response.json());
  }
}
