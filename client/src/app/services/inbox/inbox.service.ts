import {Injectable, OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

import {IInboxItem, IInboxItemContent} from '../../store';

export const InboxService = new OpaqueToken('inbox.service');

export interface IInboxService {
  getPage(pageNumber: number, pageSize: number): Observable<IInboxItem[]>;
  getPageNumber(): Observable<number>;
  getActiveItem(): Observable<IInboxItem>;
  getActiveItemContent(): Observable<IInboxItemContent>;
  setActiveItem(id: string): Observable<void>;
}

@Injectable()
export class MockInboxService implements IInboxService {
  private _inboxItems: BehaviorSubject<IInboxItem[]>;
  private _activeItem: BehaviorSubject<IInboxItem>;
  private _activeItemContent: BehaviorSubject<IInboxItemContent>;

  constructor() {
    this._inboxItems = new BehaviorSubject(defaultMockItems);
    this._activeItem = new BehaviorSubject(defaultMockItems[0]);
    this._activeItemContent = new BehaviorSubject(null);

    this.setActiveItem("0");
  }

  getPage(pageNumber: number, pageSize: number): Observable<IInboxItem[]> {
    return this._inboxItems
      .map(values => {
        if (pageNumber * pageSize > values.length) {
          // Make request to server for next page.
          return [];
        }
        else {
          let chunks = _.chunk(values, pageSize);
          return chunks[pageNumber];
        }
      });
  }

  getPageNumber(): Observable<number> {
    return Observable.of(0);
  }

  getActiveItem(): Observable<IInboxItem> {
    return this._activeItem;
  }

  getActiveItemContent(): Observable<IInboxItemContent> {
    return this._activeItemContent;
  }

  setActiveItem(id: string): Observable<void> {
    let next = this._inboxItems.value.filter(v => v.id == id)[0];
    this._activeItem.next(next)
    this._activeItemContent.next({id: id, content: "id is" + id.toString()})
    return Observable.of<void>();
  }
}

const defaultMockItems: IInboxItem[] = [
  {id: "0", sentAt: new Date(), from: "tim@email.com", to: "bob@email.com", subject: "Congrats! You've won!"},
  {id: "1", sentAt: new Date(), from: "andy@spam.com", to: "bob@email.com", subject: "Oh no! You lost!"},
  {id: "2", sentAt: new Date(), from: "andy@spam.com", to: "bob@email.com", subject: "Wait a minute..."}
]