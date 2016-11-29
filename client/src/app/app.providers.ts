import {Provider} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {
  AuthorizationActions
} from './actions';

import {
  AuthenticationProvider, Auth0AuthenticationProvider, FirebaseAuthenticationProvider,
  AuthorizationService, AuthorizationServiceImpl,
  ConfigService, ConfigServiceImpl,
  InboxService, MockInboxService
} from './services';

import {
  AuthGuard
} from './utils';

export const Providers: Provider[] = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },

  // Auth
  { provide: AuthenticationProvider, useClass: FirebaseAuthenticationProvider },
  { provide: AuthorizationService, useClass: AuthorizationServiceImpl },
  AuthorizationActions,
  AuthGuard,

  // Config
  { provide: ConfigService, useClass: ConfigServiceImpl },

  // Inbox
  { provide: InboxService, useClass: MockInboxService }
]