import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home/home-layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestComponent } from './components/test/test.component';

export const appRoutes: Routes = [
  // { path: '', component: LayoutComponent, loadChildren: 'app/layout/layout.module#LayoutModule' },
  // { path: '**', component: HomeLayoutComponent, loadChildren: 'app/layout/layout.module#LayoutModule' },
];