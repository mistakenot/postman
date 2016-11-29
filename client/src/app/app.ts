import {Component} from '@angular/core';
import {NgRedux, DevToolsExtension} from 'ng2-redux';
import {IAppState, rootReducer, DefaultAppState} from './store';

const createLogger = require('redux-logger');

@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>) {

    ngRedux.configureStore(rootReducer, DefaultAppState, [createLogger()])
  }
}
