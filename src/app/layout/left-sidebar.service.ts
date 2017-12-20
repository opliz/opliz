import { Injectable } from '@angular/core';
import { Chapter } from '../common/beans/chapter';
import { Config } from '../config';
import { HttpInterceptor } from '../common/services/HttpInterceptor';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class LeftSidebarService extends BaseService {
  urlTop : string = Config.apiUrl + '/webservice/manga/chapters/top/';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getTopChapter() {
    console.log("TEST");
    return this.http.get(this.urlTop, this.getHeaders()).map((response: Response) => response.json());
  }

}
