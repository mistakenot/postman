import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {InboxService, IInboxService} from '../../../services';
import {IInboxItemContent} from '../../../store';

@Component({
  selector: 'inbox-active-item',
  templateUrl: './inbox-active-item.html'
})
export class InboxActiveItem implements OnInit {
  public id: Observable<string>;
  public model: Observable<ViewModel>;

  private _model: BehaviorSubject<ViewModel>;
  private _id: BehaviorSubject<string>;

  constructor(
    @Inject(InboxService)private _inboxService: IInboxService,
    private _route: ActivatedRoute) {

    this.id = _route.params.map(p => p['id']);
    this._model = new BehaviorSubject({
      isLoading: true,
      isError: false
    });
    this.model = this._model;

    this._inboxService
      .getActiveItemContent()
      .subscribe(
        value => {
          this._model.next({
            isLoading: false,
            isError: false,
            item: value
          });
        },
        error => {
          this._model.next({
            isLoading: false,
            isError: true,
            error: error
          });
        });
  }

  ngOnInit() {
    this.id.subscribe(id => {
      this._inboxService.setActiveItem(id);
    });
  }

}

interface ViewModel {
  isLoading: boolean;
  isError: boolean;
  item?: IInboxItemContent
  error?: any; 
}