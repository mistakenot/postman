import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IAuthConfig} from 'angular2-jwt';
import {select} from 'ng2-redux';
import {IConfigState} from '../../store';

export const ConfigService = new OpaqueToken("config.service"); 

export interface IConfigService {
  get(): Observable<IConfigState>;
}

export class ConfigServiceImpl implements IConfigService {
  @select<IConfigState>(s => s.config) state$: Observable<IConfigState>;
  
  get(): Observable<IConfigState> {
    return this.state$;
  }
}