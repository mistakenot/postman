import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-links',
  templateUrl: './nav-links.html'
})
export class NavLinks {
  @Input() title: string;
  @Input() isLoggedIn: boolean;
}
