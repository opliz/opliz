import { Component, OnInit } from '@angular/core';
import { LeftSidebarService } from './left-sidebar.service';
import { Chapter } from '../common/beans/chapter';

@Component({
  selector: 'layout-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent implements OnInit {
  chapters : Chapter[];
  constructor(private leftSidebarService : LeftSidebarService) {

  }

  ngOnInit() {
    this.loadTopChapter();
  }

  loadTopChapter() {
    var request = this.leftSidebarService.getTopChapter().subscribe(result => {
      this.chapters = new Array<Chapter>();
      this.chapters = result;
    });
  }

}
