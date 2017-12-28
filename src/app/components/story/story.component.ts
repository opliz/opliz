import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Story } from '../../common/beans/story';
import { StoryService } from '../../common/services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  storyId : number;
  activeIdSub: any;
  story : Story;
  relatedStories: Array<Story>;
  constructor(private storyService : StoryService, private router: Router,private route: ActivatedRoute) {
    this.activeIdSub = this.route.params.subscribe(params => {
      this.storyId = params['storyId'];
      this.story = new Story();
      this.relatedStories = new Array<Story>();
    });
  }

  ngOnInit() {
    this.loadStory();
    this.loadRelatedStories();
  }

  loadStory() {
    var request = this.storyService.getStoryById(this.storyId).subscribe(result => {
      this.story = result;
    });
  }

  loadRelatedStories() {
    var request = this.storyService.getRelatedStoriesById(this.storyId).subscribe(result => {
      this.relatedStories = result;
    });
  }
}
