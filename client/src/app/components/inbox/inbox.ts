import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {InboxService, IInboxService} from '../../services/';
import {IInboxItem} from '../../store';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.html'
})
export class Inbox {
  public page: Observable<IInboxItem[]>;
  public activeItem: Observable<IInboxItem>;

  constructor(
    @Inject(InboxService)private _inboxService: IInboxService) {
    this.page = this._inboxService.getPage(0, 10);
    this.activeItem = this._inboxService.getActiveItem();
  }

}