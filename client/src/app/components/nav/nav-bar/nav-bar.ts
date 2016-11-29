import {Component, Input, Inject} from '@angular/core';
import {AuthorizationService, IAuthorizationService} from '../../../services/auth';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.html'
})
export class NavBar {
  constructor(
    @Inject(AuthorizationService) private _authService: IAuthorizationService) {

  }

  isLoggedIn = this._authService.isAuthorized()

}
