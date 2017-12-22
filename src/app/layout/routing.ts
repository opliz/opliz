import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ContentLayoutComponent } from './content/content-layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { TestComponent } from '../components/test/test.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { StoryComponent } from '../components/story/story.component';
import { NormalViewChapterComponent } from '../components/chapter/normal-view-chapter/normal-view-chapter.component';

const appRoute: Routes = [
    {
      path: '', component: HomeLayoutComponent,
      children: [
          { path: '', component: HomeComponent, pathMatch : 'full' },
          { path: 'about', component: AboutComponent},
          { path: 'contact', component: ContactComponent},
          { path: 'truyen-tranh/:storyUrl-:storyId', component: StoryComponent},
      ]
    },
    {
      path: '', component: ContentLayoutComponent,
      children: [
          { path: 'truyen-tranh/:storyUrl-:storyId/:chapterUrl-:chapterId', component: NormalViewChapterComponent }
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