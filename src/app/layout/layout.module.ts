import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { HttpModule  ,XHRBackend,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './home/home-layout.component';
import { ContentLayoutComponent } from './content/content-layout.component';
import { BookViewerLayoutComponent } from './book-viewer/book-viewer-layout.component';
import { HeaderLayoutComponent } from './header-layout.component';
import { FooterLayoutComponent } from './footer-layout.component';
import { SliderLayoutComponent } from './slider-layout.component';
import { LeftSidebarLayoutComponent } from './left-sidebar-layout.component';
import { RightSidebarLayoutComponent } from './right-sidebar-layout.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { StoryComponent } from '../components/story/story.component';
import { ChapterNormalViewerComponent } from '../components/chapter/chapter-normal-viewer/chapter-normal-viewer.component';
import { ChapterBookViewerComponent } from '../components/chapter/chapter-book-viewer/chapter-book-viewer.component';
import { TypeComponent } from '../components/type/type.component';
import { StatusComponent } from '../components/status/status.component';
import { MoreComponent } from '../components/more/more.component';
import { SearchComponent } from '../components/search/search.component';

import { routing } from './routing';
import {HttpInterceptor} from '../common/services/HttpInterceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    HttpModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers:[ 
    {
      provide: HttpInterceptor,
      useFactory:httpFactory, 
      deps:[XHRBackend,RequestOptions,SlimLoadingBarService]
    }
  ],
  exports:[SlimLoadingBarModule],
  declarations: [
    HomeLayoutComponent,
    ContentLayoutComponent,
    BookViewerLayoutComponent,
    HeaderLayoutComponent,
    SliderLayoutComponent,
    LeftSidebarLayoutComponent,
    RightSidebarLayoutComponent,
    FooterLayoutComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StoryComponent,
    ChapterNormalViewerComponent,
    ChapterBookViewerComponent,
    TypeComponent,
    StatusComponent,
    MoreComponent,
    SearchComponent,
  ]
})
export class LayoutModule {


}

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, slimbarservice:SlimLoadingBarService) {
  return  new HttpInterceptor(backend, defaultOptions,slimbarservice);
}