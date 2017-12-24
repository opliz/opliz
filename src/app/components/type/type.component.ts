import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Story } from '../../common/beans/story';
import { TypeService } from './type.service';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  typeId : number;
  activeIdSub: any;
  stories : Array<Story>;
  constructor(private typeService : TypeService, private router : Router,private route : ActivatedRoute) {
    this.activeIdSub = this.route.params.subscribe(params => {
      this.typeId = params['typeId'];
      this.stories = new Array<Story>();
    });
  }

  ngOnInit() {
    this.loadStories();
  }

  loadStories() {
    var request = this.typeService.getStoryByTypeId(this.typeId).subscribe(result => {
      this.stories = result;
    });
  }
}
