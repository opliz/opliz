import { Component, OnInit } from '@angular/core';
import { StatusService } from '../common/services/status.service';
import { TypeService } from '../common/services/type.service';
import { Status } from '../common/beans/status';
import { Type } from '../common/beans/type';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
})
export class HeaderLayoutComponent implements OnInit {

  statuses : Array<Status>;
  types : Array<Type>;

  constructor(private statusService : StatusService, private typeService : TypeService) {
    this.statuses = new Array<Status>();
    this.types = new Array<Type>();
  }

  ngOnInit() {
    this.loadStatuses();
    this.loadTypes();
  }

  loadStatuses() {
    var request = this.statusService.getStatuses().subscribe(result => {
      this.statuses = result;
    });
  }

  loadTypes() {
    var request = this.typeService.getTypes().subscribe(result => {
      this.types = result;
    });
  }
}
