import { Story } from './story';

export class Status {
  constructor() {
    this.stories = new Array<Story>();
  }
  statusId: number;
  statusName : string;
  statusUrl : string;
  stories : Array<Story>;
}