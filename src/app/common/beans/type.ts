import { Story } from './story';

export class Type {
  constructor() {
    this.stories = new Array<Story>();
  }
  typeId: number;
  typeName : string;
  typeUrl : string;
  stories : Array<Story>;
}