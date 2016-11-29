import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IInboxItem} from '../../../store'; 
import * as _ from 'lodash';

@Component({
  selector: 'inbox-list',
  templateUrl: './inbox-list.html'
})
export class InboxList {
  @Input() listItems: IInboxItem[];
  @Input() activeItem: IInboxItem;
  @Output() onClickItem: EventEmitter<string>;

  maxListIndex() {
    return this.listItems.length;
  }

  listIndex() {
    return _.findIndex(this.listItems, i => i.id === this.activeItem.id);
  }
}