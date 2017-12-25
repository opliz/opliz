import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from '../../common/services/base.service';

@Injectable()
export class StoryService extends BaseService {
  urlStoriesApi : string = Config.apiUrl + '/webservice/manga/story?manga_id=';
  urlRelatedStoriesApi : string = Config.apiUrl + '/webservice/manga/stories/related/story?size=7&manga_id=';
  constructor(public http : HttpInterceptor) {
    super(http);
  }
  getStoryById(id) {
    var url = this.urlStoriesApi+id;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }
  getRelatedStoriesById(id) {
    var url = this.urlRelatedStoriesApi+id;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }
}
