import {combineReducers} from 'redux';
import {IAction} from '../actions';
import * as auth from './authorization.store';
import * as config from './config.store';

export {IAuthorizationState} from './authorization.store';
export {IConfigState} from './config.store';
export {IInboxItem, IInboxItemContent} from './inbox.store';

export interface IAppState {
  authorization: auth.IAuthorizationState;
  config: config.IConfigState
}

export const DefaultAppState: IAppState = {
  authorization: auth.AuthorizationDefaultState,
  config: config.ConfigDefaultState
}

export const rootReducer = combineReducers<IAppState>({
  authorization: auth.authorizationReducer,
  config: config.configReducer
});