import { Chapter } from './chapter';
import { Type } from './type';
import { Status } from './status';

export class Story {
  constructor() {
    this.chapters = new Array<Chapter>();
    this.types = new Array<Type>();
    this.status = new Status();
  }
  storyId: number;
  storyName : string;
  storyUrl : string;
  storyCoverImageUrl: string;
  storyAuthor : string;
  storyDescription : string;
  chapters : Array<Chapter>;
  types : Array<Type>;
  status : Status;
}