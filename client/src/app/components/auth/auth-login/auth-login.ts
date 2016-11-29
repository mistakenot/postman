import {Component, Input, Inject, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {LoginFormModel} from './auth-login-form/auth-login-form'
import {AuthorizationService, IAuthorizationService} from '../../../services';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLogin implements OnInit, OnDestroy {
  private _subscription: Subscription;

  constructor(
    @Inject(AuthorizationService)private _authService: IAuthorizationService,
    private _router: Router) {}

  ngOnInit() {
    this._subscription = this._authService
      .isAuthorized()
      .filter(isAuthorized => isAuthorized)
      .subscribe(_ => this._router.navigateByUrl('/'));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
