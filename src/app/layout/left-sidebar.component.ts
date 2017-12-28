import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../common/services/chapter.service';
import { StoryService } from '../common/services/story.service';
import { Chapter } from '../common/beans/chapter';
import { Story } from '../common/beans/story';

@Component({
  selector: 'layout-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent implements OnInit {
  chapters : Array<Chapter>;
  stories : Array<Story>;
  constructor(private chapterService : ChapterService, private storyService : StoryService) {
    this.chapters = new Array<Chapter>();
    this.stories = new Array<Story>();
  }

  ngOnInit() {
    this.loadTopChapters();
    this.loadPopularStories();
  }

  loadTopChapters() {
    var request = this.chapterService.getTopChapters().subscribe(result => {
      this.chapters = result;
    });
  }

  loadPopularStories() {
    var request = this.storyService.getPopularStories().subscribe(result => {
      this.stories = result;
    });
  }

}
