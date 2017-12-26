import { Component, OnInit } from '@angular/core';
import { LeftSidebarService } from './left-sidebar.service';
import { Chapter } from '../common/beans/chapter';
import { Story } from '../common/beans/story';

@Component({
  selector: 'layout-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent implements OnInit {
  chapters : Array<Chapter>;
  stories : Array<Story>;
  constructor(private leftSidebarService : LeftSidebarService) {
    this.chapters = new Array<Chapter>();
    this.stories = new Array<Story>();
  }

  ngOnInit() {
    this.loadTopChapters();
    this.loadPopularStories();
  }

  loadTopChapters() {
    var request = this.leftSidebarService.getTopChapters().subscribe(result => {
      this.chapters = result;
    });
  }

  loadPopularStories() {
    var request = this.leftSidebarService.getPopularStories().subscribe(result => {
      this.stories = result;
    });
  }

}
