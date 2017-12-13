import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HttpModule  ,XHRBackend,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SidebarComponent } from './sidebar.component';
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
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
  ]
})
export class LayoutModule {


}

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, slimbarservice:SlimLoadingBarService) {
  return  new HttpInterceptor(backend, defaultOptions,slimbarservice);
}