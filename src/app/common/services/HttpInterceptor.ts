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