import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpModule,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request,XHRBackend
} from '@angular/http';
import { RouterModule } from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


import { HttpInterceptor } from './common/services/HttpInterceptor';
import { appRoutes } from './routing';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { LeftSidebarService } from './layout/left-sidebar.service';
import { RightSidebarService } from './layout/right-sidebar.service';
import { HeaderService } from './layout/header.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    SlimLoadingBarModule.forRoot(),
  ],
  exports: [SlimLoadingBarModule],
  providers: [
    HeaderService,
    LeftSidebarService,
    RightSidebarService,
    {
      provide: HttpInterceptor,
      useFactory:httpFactory, 
      deps:[XHRBackend,RequestOptions,SlimLoadingBarService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, slimbarservice:SlimLoadingBarService) {
  return  new HttpInterceptor(backend, defaultOptions, slimbarservice);
}
