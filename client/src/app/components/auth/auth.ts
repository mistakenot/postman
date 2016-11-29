import {Component, Input, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'auth',
  templateUrl: './auth.html'
})
export class Auth {

  constructor(
    private router: Router) {}

}
