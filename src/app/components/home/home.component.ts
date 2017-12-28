import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Chapter } from '../../common/beans/chapter';
import { ChapterService } from '../../common/services/chapter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeIdSub: any;
  chapters : Array<Chapter>;
  constructor(private chapterService : ChapterService) {
  }

  ngOnInit() {
    this.loadChapters();
  }

  loadChapters() {
    var request = this.chapterService.getChaptesBySize().subscribe(result => {
      this.chapters = result;
    });
  }

}
