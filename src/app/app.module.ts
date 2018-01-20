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

import { StatusService } from './common/services/status.service';
import { TypeService } from './common/services/type.service';
import { StoryService } from './common/services/story.service';
import { ChapterService } from './common/services/chapter.service';


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
    TypeService,
    StatusService,
    StoryService,
    ChapterService,
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
