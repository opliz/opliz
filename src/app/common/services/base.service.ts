import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpInterceptor } from './HttpInterceptor';

@Injectable()
export class BaseService {
  constructor(protected http: HttpInterceptor) {

  }

  getHeaders() : RequestOptions {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return new RequestOptions({headers : headers});
  }
}
