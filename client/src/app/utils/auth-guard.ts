import {Inject, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthorizationService, IAuthorizationService} from '../services'; 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthorizationService) private _authService: IAuthorizationService){}

  canActivate() {
    return this._authService.getToken().map(v => v !== undefined || v !== '');
  }

}
