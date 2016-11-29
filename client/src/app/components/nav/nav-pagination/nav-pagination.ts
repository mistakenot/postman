import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'nav-pagination',
  templateUrl: './nav-pagination.html'
})
export class NavPagination {
  @Input() index: number;
  @Output() indexChange: EventEmitter<number>;
  @Input() maxIndex: number;
  
  onClickNext() {
    if (this.index != this.maxIndex) {
      this.indexChange.next(this.index + 1);
    }
  }

  onClickPrevious() {
    if (this.index > 0) {
      this.indexChange.next(this.index - 1);
    }
  }

}