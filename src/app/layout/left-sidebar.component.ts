import { Component, OnInit } from '@angular/core';
import { LeftSidebarService } from './left-sidebar.service';
import { Chapter } from '../common/beans/chapter';
import { Story } from '../common/beans/story';

@Component({
  selector: 'layout-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent implements OnInit {
  chapters : Chapter[];
  stories : Story[];
  constructor(private leftSidebarService : LeftSidebarService) {

  }

  ngOnInit() {
    this.loadTopChapters();
    this.loadPopularStories();
  }

  loadTopChapters() {
    var request = this.leftSidebarService.getTopChapters().subscribe(result => {
      this.chapters = new Array<Chapter>();
      this.chapters = result;
    });
  }

  loadPopularStories() {
    var request = this.leftSidebarService.getPopularStories().subscribe(result => {
      this.stories = new Array<Story>();
      this.stories = result;
    });
  }

}
