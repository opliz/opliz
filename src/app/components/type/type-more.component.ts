import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Story } from '../../common/beans/story';
import { Type } from '../../common/beans/type';
import { TypeService } from '../../common/services/type.service';
import { StoryService } from '../../common/services/story.service';

@Component({
  selector: 'app-type-more',
  templateUrl: './type-more.component.html',
  styleUrls: ['./type-more.component.css']
})
export class TypeMoreComponent implements OnInit {

  typeUrl : string;
  index : number;
  activeIdSub: any;
  type : Type;
  stories : Array<Story>;
  constructor(private typeService : TypeService, private storyService : StoryService, private router : Router, private route : ActivatedRoute) {
    this.activeIdSub = this.route.params.subscribe(params => {
      this.typeUrl = params['typeUrl'];
      this.index = params['index'];
      this.stories = new Array<Story>();
      this.type = new Type();
    });
  }

  ngOnInit() {
    this.index++;
    this.loadStories();
    this.loadType();
  }

  loadStories() {
    var request = this.storyService.getStoryByTypeUrl(this.typeUrl, this.index).subscribe(result => {
      this.stories = result;
    });
  }

  loadType() {
    var request = this.typeService.getTypeByTypeUrl(this.typeUrl).subscribe(result => {
      this.type = result;
    });
  }

}
