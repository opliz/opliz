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
import { ChapterNormalViewerService } from './components/chapter/chapter-normal-viewer/chapter-normal-viewer.service';
import { HomeService } from './components/home/home.service';
import { StoryService } from './components/story/story.service';
import { MoreService } from './components/more/more.service';
import { TypeService } from './components/type/type.service';
import { StatusService } from './components/status/status.service';
import { ChapterBookViewerService } from './components/chapter/chapter-book-viewer/chapter-book-viewer.service';

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
    ChapterNormalViewerService,
    ChapterBookViewerService,
    HomeService,
    StoryService,
    MoreService,
    TypeService,
    StatusService,
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
