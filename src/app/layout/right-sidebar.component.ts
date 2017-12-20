import { Component, OnInit } from '@angular/core';
import { RightSidebarService } from './right-sidebar.service';
import { Type } from '../common/beans/type';

@Component({
  selector: 'layout-right-sidebar',
  templateUrl: './right-sidebar.component.html',
})
export class RightSidebarComponent implements OnInit {
  types : Type[];
  constructor(private rightSidebarService : RightSidebarService) { }

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    var request = this.rightSidebarService.getTypes().subscribe(result => {
      this.types = new Array<Type>();
      this.types = result;
    });
  }
}
