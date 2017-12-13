import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const appRoutes: Routes = [
  // { path: '', component: LayoutComponent, loadChildren: 'app/layout/layout.module#LayoutModule' },
  { path: '**', component: LayoutComponent, loadChildren: 'app/layout/layout.module#LayoutModule' },
];