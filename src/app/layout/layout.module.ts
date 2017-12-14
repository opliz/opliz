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
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SidebarComponent } from './sidebar.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { TestComponent } from '../components/test/test.component';

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
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestComponent
  ]
})
export class LayoutModule {


}

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, slimbarservice:SlimLoadingBarService) {
  return  new HttpInterceptor(backend, defaultOptions,slimbarservice);
}