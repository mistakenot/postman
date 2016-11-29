import {Injectable, Inject, OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {select} from 'ng2-redux';
import {AuthorizationActions} from '../../actions';
import {ConfigService, IConfigService} from '../config';
import {IConfigState, IAuthorizationState} from '../../store';

export interface IAuthorizationService {
  setToken(token: string): void;
  clearToken(): void;
  getToken(): Observable<string>;
  isAuthorized(): Observable<boolean>;
}

export const AuthorizationService = new OpaqueToken("authorization.service");

@Injectable()
export class AuthorizationServiceImpl implements IAuthorizationService {
  @select<IAuthorizationState>(s => s.authorization) state$: Observable<IAuthorizationState>;

  constructor(
    @Inject(ConfigService)private _configService: IConfigService,
    private _actions: AuthorizationActions) {

    this._config = this._configService.get();
  }

  private _config: Observable<IConfigState>

  setToken(token: string): void {
    this._config.first().subscribe(config => {
      this._actions.setAuthorizationHeader('Bearer ' + token);
      localStorage.setItem(config.auth.tokenName, token);
    });
  }

  getToken(): Observable<string> {
    return this.state$.map(s => s.token.raw);
  }

  clearToken(): void {
    this._config.first().subscribe(config => {
      this._actions.clearAuthorizationToken();
      localStorage.removeItem(config.auth.tokenName);
    });
  }

  isAuthorized(): Observable<boolean> {
    return this.state$.map(s => s.isAuthorized);
  }

}