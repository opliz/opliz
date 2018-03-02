import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from './base.service';

@Injectable()
export class StoryService extends BaseService {

  urlStoriesApi : string = Config.apiUrl + '/webservice/manga/story?manga_id=';
  urlRelatedStoriesByStoryIdApi : string = Config.apiUrl + '/webservice/manga/stories-related-story?size=7&manga_id=';
  urlRelatedStoriesByChapterIdApi : string = Config.apiUrl + '/webservice/manga/stories-related-story-in-chapter?size=7&chapter_id=';
  urlPopularApi : string = Config.apiUrl + '/webservice/manga/stories-popular';
  urlStoriesInStatusByIdApi : string = Config.apiUrl + '/webservice/manga/stories-belong-status-id?size=10&page=1&status_id=';
  urlFirstStoriesGroupInStatusByUrlApi : string = Config.apiUrl + '/webservice/manga/stories-belong-status-url?size=10&page=1&status_url=';
  urlStoriesInStatusByUrlApi : string = Config.apiUrl + '/webservice/manga/stories-belong-status-url?size=10&status_url=';
  urlStoriesInTypeByIdApi : string = Config.apiUrl + '/webservice/manga/stories-belong-type-id?size=10&page=1&type_id=';
  urlFirstStoriesGroupInTypeByUrlApi : string = Config.apiUrl + '/webservice/manga/stories-belong-type-url?size=10&page=1&type_url=';
  urlStoriesInTypeByUrlApi : string = Config.apiUrl + '/webservice/manga/stories-belong-type-url?size=10&type_url=';
  urlStoriesSearch : string = Config.apiUrl + '/webservice/manga/search?name=';

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

  getRelatedStoriesByStoryId(id) {
    var url = this.urlRelatedStoriesByStoryIdApi+id;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

 getRelatedStoriesByChapterId(id) {
    var url = this.urlRelatedStoriesByChapterIdApi+id;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getPopularStories() {
    return this.http.get(this.urlPopularApi, this.getHeaders()).map((response: Response) => response.json());
  }

  getStoryByStatusId(statusId) {
    var url = this.urlStoriesInStatusByIdApi + statusId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getFirstStoryGroupByStatusUrl(statusUrl) {
    var url = this.urlFirstStoriesGroupInStatusByUrlApi + statusUrl;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStoryByStatusUrl(statusUrl, page) {
    var url = this.urlStoriesInStatusByUrlApi + statusUrl + "&page=" + page;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStoryByTypeId(typeId) {
    var url = this.urlStoriesInTypeByIdApi + typeId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getFirstStoryGroupByTypeUrl(typeUrl) {
    var url = this.urlFirstStoriesGroupInTypeByUrlApi + typeUrl;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStoryByTypeUrl(typeUrl, page) {
    var url = this.urlStoriesInTypeByUrlApi + typeUrl + "&page=" + page;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getStoriesSearch(name) {
    var url = this.urlStoriesSearch + name;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

}
