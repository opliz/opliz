import { Chapter } from './chapter';
import { Type } from './type';

export class Story {
  constructor() {
    this.chapters = new Array<Chapter>();
    this.types = new Array<Type>();
  }
  storyId: number;
  storyName : string;
  storyUrl : string;
  storyCoverImageUrl: string;
  chapters : Array<Chapter>;
  types: Array<Type>;
}