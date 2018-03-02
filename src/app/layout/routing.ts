import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ContentLayoutComponent } from './content/content-layout.component';
import { BookViewerLayoutComponent } from './book-viewer/book-viewer-layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { StoryComponent } from '../components/story/story.component';
import { ChapterNormalViewerComponent } from '../components/chapter/chapter-normal-viewer/chapter-normal-viewer.component';
import { ChapterBookViewerComponent } from '../components/chapter/chapter-book-viewer/chapter-book-viewer.component';
import { TypeComponent } from '../components/type/type.component';
import { TypeMoreComponent } from '../components/type/type-more.component';
import { StatusComponent } from '../components/status/status.component';
import { StatusMoreComponent } from '../components/status/status-more.component';
import { MoreComponent } from '../components/more/more.component';
import { SearchComponent } from '../components/search/search.component';

const appRoute: Routes = [
    {
      path: '', component: HomeLayoutComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch : 'full' },
        { path: 'more/:index', component: MoreComponent},
        { path: 'the-loai/:typeUrl', component: TypeComponent},
        { path: 'the-loai/:typeUrl/:index', component: TypeMoreComponent},
        { path: 'trang-thai/:statusUrl', component: StatusComponent},
        { path: 'trang-thai/:statusUrl/:index', component: StatusMoreComponent},
        { path: 'about', component: AboutComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'search', component: SearchComponent}
      ]
    },
    {
      path: '', component: ContentLayoutComponent,
      children: [
        { path: ':storyUrl/:storyId', component: StoryComponent},
        { path: ':storyUrl/:chapterUrl/:chapterId', component: ChapterNormalViewerComponent}
      ]
    },
    {
      path: '', component: BookViewerLayoutComponent,
      children: [
        { path: 'truyen-tranh/book-viewer/:storyUrl/:chapterUrl/:chapterId', component: ChapterBookViewerComponent}
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