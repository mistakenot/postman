import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthorizationService, IAuthorizationService} from '../../../services/auth'

@Component({
  selector: 'auth-logout',
  templateUrl: './auth-logout.html'
})
export class AuthLogout implements OnInit {
  private _subscription: Subscription;
  
  constructor(
    @Inject(AuthorizationService) private _authService: IAuthorizationService,
    private _router: Router) {}

  ngOnInit() {
    this._subscription = this._authService
      .isAuthorized()
      .filter(isAuthorized => !isAuthorized)
      .subscribe(_ => this._router.navigateByUrl('/'));

    this._authService.clearToken();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}