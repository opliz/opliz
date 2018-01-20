import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import { Story } from '../../common/beans/story';
import { StoryService } from '../../common/services/story.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery : string;
  activeIdSub: any;
  stories : Array<Story>;
  constructor(private storyService : StoryService, private router : Router, private route : ActivatedRoute ) {
    this.route.queryParams.filter(params => params.search_query).subscribe(params => {
      this.searchQuery = params.search_query;
    });
  }

  ngOnInit() {
    console.log(this.searchQuery);
    this.loadStories();
  }

  loadStories() {
    var request = this.storyService.getStoriesSearch(this.searchQuery).subscribe(result => {
      this.stories = result;
    });
  }

}
