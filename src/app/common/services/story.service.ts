import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from './base.service';

@Injectable()
export class StoryService extends BaseService {

  urlStoriesApi : string = Config.apiUrl + '/webservice/manga/story?manga_id=';
  urlRelatedStoriesApi : string = Config.apiUrl + '/webservice/manga/stories/related/story?size=7&manga_id=';
  urlPopularApi : string = Config.apiUrl + '/webservice/manga/stories/popular';
  urlStoriesInStatusApi : string = Config.apiUrl + '/webservice/manga/status/stories?size=10&page=1&status_id=';
  urlStoriesInTypeApi : string = Config.apiUrl + '/webservice/manga/type/stories?size=10&page=1&type_id=';

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

  getPopularStories() {
    return this.http.get(this.urlPopularApi, this.getHeaders()).map((response: Response) => response.json());
  }

  getStoryByStatusId(statusId) {
    var url = this.urlStoriesInStatusApi + statusId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStoryByTypeId(typeId) {
    var url = this.urlStoriesInTypeApi + typeId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

}
