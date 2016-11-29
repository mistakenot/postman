import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IInboxItem} from '../../../../store'; 

@Component({
  selector: 'inbox-list-item',
  templateUrl: './inbox-list-item.html'
})
export class InboxListItem {
  @Input() model: IInboxItem;
  @Input() isActiveItem: boolean;
  @Output() onClick = new EventEmitter<string>();
}