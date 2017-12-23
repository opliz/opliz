import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Chapter } from '../../common/beans/chapter';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeIdSub: any;
  chapters : Array<Chapter>;
  constructor(private homeService : HomeService) {
  }

  ngOnInit() {
    this.loadChapters();
  }

  loadChapters() {
    var request = this.homeService.getChaptesBySize().subscribe(result => {
      this.chapters = result;
    });
  }

}
