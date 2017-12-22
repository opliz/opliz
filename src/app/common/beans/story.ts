import { Chapter } from './chapter';

export class Story {
  constructor() {
    this.chapters = new Array<Chapter>();
  }
  storyId: number;
  storyName : string;
  storyUrl : string;
  chapters : Array<Chapter>;
}