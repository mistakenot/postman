import {Injectable, Inject, OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {AngularFire} from 'angularfire2';
import {IAuthorizationService, AuthorizationService} from './authorization.service'
import * as Random from '../../utils/random.utils';

declare var Auth0Lock: any;

export const AuthenticationProvider = new OpaqueToken("authentication.provider");

export interface IAuthenticationProvider {
  isAuthenticating: Observable<boolean>;
  beginLogin(): void;
  beginLogout(): void;
}

export interface IAuth0LockConfig {
    clientId: string,
    domain: string,
    options: any
}

const Auth0LockConfigDefault: IAuth0LockConfig = {
    clientId: "5hSX9X73iQkI1E1oRLOUPcHcqu1PCHRj",
    domain: "mistakenot.eu.auth0.com",
    options: {
        auth: {
            redirect: false
        },
        autoclose: true
    }
}

@Injectable()
export class Auth0AuthenticationProvider implements IAuthenticationProvider {
    private _lock: any;
    private _lockDialogShown: BehaviorSubject<boolean>;

    public isAuthenticating: Observable<boolean>;

    constructor(
      @Inject(AuthorizationService)private _authorizationService: IAuthorizationService) {

      this._lockDialogShown = new BehaviorSubject(false);
      this._lock = new Auth0Lock(Auth0LockConfigDefault.clientId, Auth0LockConfigDefault.domain, Auth0LockConfigDefault.options);
      this.isAuthenticating = this._lockDialogShown;

      this._lock.on('authenticated', result => {
          this._authorizationService.setToken(result.idToken);
      });

      this._lock.on('authorization_error', error => {
          this._lockDialogShown.error(error);
      })

      this._lock.on('show', () => {
          this._lockDialogShown.next(true);
      });

      this._lock.on('hide', () => {
          this._lockDialogShown.next(false);
      });
        
    }

    beginLogin(): void {       
        this._lock.show();
    }

    beginLogout(): void {
        throw 'Not Implemented';
    }
}

@Injectable()
export class MockAuthenticationProvider implements IAuthenticationProvider {
  public isAuthenticating: Observable<boolean>;

  private _isAuthenticating: Subject<boolean>;

  constructor(
    @Inject(AuthorizationService)private _authorizationService: IAuthorizationService) {

    this._isAuthenticating = new BehaviorSubject(false);
    this.isAuthenticating = this._isAuthenticating;
  }

  beginLogin(): void {
    this._isAuthenticating.next(true);

    Random.timeout(() => {
      this._authorizationService.setToken("authorized_token");
      this._isAuthenticating.next(false);
    });
  }

  beginLogout(): void {
    Random.timeout(() => {
      this._authorizationService.clearToken();
    });
  }

}

@Injectable()
export class FirebaseAuthenticationProvider implements IAuthenticationProvider {
    public isAuthenticating: Observable<boolean>;

    private _isAuthenticating: Subject<boolean>;

    constructor(
        @Inject(AuthorizationService)private _authorizationService: IAuthorizationService,
        private _firebase: AngularFire) {

        this._isAuthenticating = new BehaviorSubject(false);
    }

    beginLogin(): void {
        this._firebase.auth.login({email: 'bob@email.com', password: '123456'}).then(
            state => {
                state.auth.getToken().then(t => {
                    this._authorizationService.setToken(t);
                });
            },
            err => {
                console.log(err);
            }
        )
    }

    beginLogout(): void {

    }
}