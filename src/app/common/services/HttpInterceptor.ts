import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { Observable } from 'rxjs/Observable';
// Shows Progress bar and notifications
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()
export class HttpInterceptor extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private slimbarservice: SlimLoadingBarService,
  ) {
    super(backend, defaultOptions);
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  get(url: string, options?: RequestOptions): any {
    this.beforeRequest();
    return super.get(url, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  getHeaders() : RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({headers : headers});
  }

  post(url: string, body: any, options?: RequestOptions): any {
    this.beforeRequest();
    return super.post(url, body, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  delete(url: string, options?: RequestOptions): any {
    this.beforeRequest();
    return super.delete(url, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  put(url: string, body: any, options?: RequestOptions): any {
    this.beforeRequest();
    return super.post(url, body, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Before any Request.
   */
  private beforeRequest(): void {
    if (this.slimbarservice)
      this.slimbarservice.start();
  }

  /**
   * After any request.
   */
  private afterRequest(): void {
    if (this.slimbarservice)
      this.slimbarservice.complete();
  }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(error: any, caught: any): any {
    if (this.slimbarservice)
      this.slimbarservice.stop();
    return Error(error);
  }

  /**
   * onSuccess
   * @param res
   */
  private onSuccess(res: Response): void {

  }

  /**
   * onError
   * @param error
   */
  private onError(error: any): void {
    //this.alertService.error(error.message);
    if (this.slimbarservice)
      this.slimbarservice.stop();
    
  }

  /**
   * onFinally
   */
  private onFinally(): void {
    this.afterRequest();
  }
}