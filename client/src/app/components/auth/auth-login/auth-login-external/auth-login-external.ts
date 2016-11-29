import {Component, Output, Inject, EventEmitter, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {
  AuthenticationProvider, IAuthenticationProvider} from '../../../../services/auth';

@Component({
  selector: 'auth-login-external',
  templateUrl: './auth-login-external.html'
})
export class AuthLoginExternal implements OnInit {
  constructor(
    @Inject(AuthenticationProvider)private _authProvider: IAuthenticationProvider) {
      
  }

  ngOnInit() {
    this._authProvider.beginLogin();
  }

}
