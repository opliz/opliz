import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ContentLayoutComponent } from './content/content-layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { StoryComponent } from '../components/story/story.component';
import { ChapterNormalViewerComponent } from '../components/chapter/chapter-normal-viewer/chapter-normal-viewer.component';
import { TypeComponent } from '../components/type/type.component';

const appRoute: Routes = [
    {
      path: '', component: HomeLayoutComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch : 'full' },
        { path: 'the-loai/:typeUrl-:typeId', component: TypeComponent},
        { path: 'trang-thai/:statusUrl-:statusId', component: TypeComponent},
        { path: 'about', component: AboutComponent},
        { path: 'contact', component: ContactComponent}
      ]
    },
    {
      path: '', component: ContentLayoutComponent,
      children: [
        { path: 'truyen-tranh/:storyUrl-:storyId', component: StoryComponent},
        { path: 'truyen-tranh/:storyUrl-:storyId/:chapterUrl-:chapterId', component: ChapterNormalViewerComponent}
      ]
    },
    {
      path: '', component: HomeLayoutComponent,
      children: [
        { path : '**', component : PageNotFoundComponent }
      ]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoute);