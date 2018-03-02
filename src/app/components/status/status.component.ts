import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Story } from '../../common/beans/story';
import { Status } from '../../common/beans/status';
import { StatusService } from '../../common/services/status.service';
import { StoryService } from '../../common/services/story.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusUrl : string;
  activeIdSub: any;
  status : Status;
  stories : Array<Story>;
  constructor(private statusService : StatusService, private storyService : StoryService, private router : Router,private route : ActivatedRoute) {
    this.activeIdSub = this.route.params.subscribe(params => {
      this.statusUrl = params['statusUrl'];
      this.stories = new Array<Story>();
      this.status = new Status();
    });
  }

  ngOnInit() {
    this.loadStories();
    this.loadStatus();
  }

  loadStories() {
    var request = this.storyService.getStoryByStatusId(this.statusUrl).subscribe(result => {
      this.stories = result;
    });
  }

  loadStatus() {
    var request = this.statusService.getStatusByStatusUrl(this.statusUrl).subscribe(result => {
      this.status = result;
    });
  }
}
