import {OpaqueToken} from '@angular/core';
import {IAuthConfig, AuthConfig} from 'angular2-jwt';
import {IAction} from '../actions'

export type IConfigState = {
  auth: IAuthConfig
};

export const ConfigDefaultState: IConfigState = {
  auth: new AuthConfig().getConfig()
}

export function configReducer(state: IConfigState = ConfigDefaultState, action: IAction): IConfigState {
  return state;
}