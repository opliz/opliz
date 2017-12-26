import { Component, OnInit } from '@angular/core';
import { RightSidebarService } from './right-sidebar.service';
import { Type } from '../common/beans/type';

@Component({
  selector: 'layout-right-sidebar',
  templateUrl: './right-sidebar.component.html',
})
export class RightSidebarComponent implements OnInit {
  types : Array<Type>;
  constructor(private rightSidebarService : RightSidebarService) {
    this.types = new Array<Type>();
  }

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    var request = this.rightSidebarService.getTypes().subscribe(result => {
      this.types = result;
    });
  }
}
