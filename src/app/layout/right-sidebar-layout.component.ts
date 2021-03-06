import { Component, OnInit } from '@angular/core';
import { TypeService } from '../common/services/type.service';
import { Type } from '../common/beans/type';

@Component({
  selector: 'right-sidebar-layout',
  templateUrl: './right-sidebar-layout.component.html',
})
export class RightSidebarLayoutComponent implements OnInit {
  types : Array<Type>;
  constructor(private typeService : TypeService) {
    this.types = new Array<Type>();
  }

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    var request = this.typeService.getTypes().subscribe(result => {
      this.types = result;
    });
  }
}
