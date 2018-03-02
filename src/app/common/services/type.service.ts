import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { HttpInterceptor } from '../../common/services/HttpInterceptor';
import { BaseService } from './base.service';

@Injectable()
export class TypeService extends BaseService {

  urlTypeByTypeIdApi : string = Config.apiUrl + '/webservice/manga/type?type_id=';
  urlTypeByTypeUrlApi : string = Config.apiUrl + '/webservice/manga/type-by-url?type_url=';
  urlTypesApi : string = Config.apiUrl + '/webservice/manga/types';

  constructor(public http : HttpInterceptor) {
    super(http);
  }

  getTypeByTypeId(typeId) {
    var url = this.urlTypeByTypeIdApi + typeId;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getTypeByTypeUrl(typeUrl) {
    var url = this.urlTypeByTypeUrlApi + typeUrl;
    return this.http.get(url, this.getHeaders()).map((response: Response) =>{
      var result = response.json();
      return result;
    });
  }

  getTypes() {
    return this.http.get(this.urlTypesApi, this.getHeaders()).map((response: Response) => response.json());
  }

}
