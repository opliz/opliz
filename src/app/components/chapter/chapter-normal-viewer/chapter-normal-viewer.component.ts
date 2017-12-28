import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Chapter } from '../../../common/beans/chapter';
import { Story } from '../../../common/beans/story';
import { ChapterService } from '../../../common/services/chapter.service';
import { StoryService } from '../../../common/services/story.service';

@Component({
  selector: 'app-chapter-normal-viewer',
  templateUrl: './chapter-normal-viewer.component.html',
  styleUrls: ['./chapter-normal-viewer.component.css']
})
export class ChapterNormalViewerComponent implements OnInit {
  chapterId : number;
  activeIdSub: any;
  chapter : Chapter;
  relatedStories: Array<Story>;
  constructor(private chapterService : ChapterService, private storyService : StoryService, private router: Router,private route: ActivatedRoute) {
    this.activeIdSub = this.route.params.subscribe(params => {
      this.chapterId = params['chapterId'];
      this.chapter = new Chapter();
      this.relatedStories = new Array<Story>();
    });
  }

  ngOnInit() {
    this.loadChapter();
    this.loadRelatedStories();
  }

  loadChapter() {
    var request = this.chapterService.getById(this.chapterId).subscribe(result => {
      this.chapter = result;
    });
  }

  loadRelatedStories() {
    var request = this.storyService.getRelatedStoriesById(this.chapterId).subscribe(result => {
      this.relatedStories = result;
    });
  }
}
