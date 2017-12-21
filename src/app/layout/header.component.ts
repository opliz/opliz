import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Status } from '../common/beans/status';
import { Type } from '../common/beans/type';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  statuses : Status[];
  types : Type[];

  constructor(private headerService : HeaderService) { }

  ngOnInit() {
    this.loadStatuses();
    this.loadTypes();
  }

  loadStatuses() {
    var request = this.headerService.getStatuses().subscribe(result => {
      this.statuses = new Array<Status>();
      this.statuses = result;
    });
  }

  loadTypes() {
    var request = this.headerService.getTypes().subscribe(result => {
      this.types = new Array<Type>();
      this.types = result;
    });
  }
}
