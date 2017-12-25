import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Chapter } from '../../../common/beans/chapter';
import { Story } from '../../../common/beans/story';
import { ChapterNormalViewerService } from './chapter-normal-viewer.service';

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
  constructor(private chapterNormalViewerService : ChapterNormalViewerService, private router: Router,private route: ActivatedRoute) {
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
    var request = this.chapterNormalViewerService.getById(this.chapterId).subscribe(result => {
      this.chapter = result;
    });
  }

  loadRelatedStories() {
    var request = this.chapterNormalViewerService.getRelatedStoriesById(this.chapterId).subscribe(result => {
      this.relatedStories = result;
    });
  }
}
