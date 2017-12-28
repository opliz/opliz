import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Chapter } from '../../common/beans/chapter';
import { ChapterService } from '../../common/services/chapter.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  index : number;
  activeIdSub: any;
  chapters : Array<Chapter>;

  constructor(private chapterService : ChapterService, private router : Router,private route : ActivatedRoute) {
    this.activeIdSub = this.route.params.subscribe(params => {
      this.index = params['index'];
      this.chapters = new Array<Chapter>();
    });
  }

  ngOnInit() {
    this.loadChapters();
    this.index++;
  }

  loadChapters() {
    var request = this.chapterService.getMoreChaptesBySize(this.index).subscribe(result => {
      this.chapters = result;
    });
  }

}
