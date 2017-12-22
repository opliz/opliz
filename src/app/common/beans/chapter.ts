import { Story } from './story';
import { Page } from './page';

export class Chapter {

  constructor() {
    this.story = new Story();
  }

  chapterId: number;
  chapterName : string;
  chapterUrl : string;
  chapterIndex : string;
  chapterCoverImageUrl : string;
  story : Story;
  pageDetail : Array<Page>;
}