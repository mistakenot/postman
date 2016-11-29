import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {NgReduxModule} from 'ng2-redux';

import {Providers} from './app.providers';
import {Components, AppComponent} from './app.components';
import {rootRouterConfig} from "./app.routes";
import {bootstrapFirebase} from './utils/firebase';

@NgModule({
  declarations: Components,
  imports     : [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(rootRouterConfig), 
    NgReduxModule.forRoot(),
    bootstrapFirebase()],
  providers   : Providers,
  bootstrap   : [AppComponent]
})
export class AppModule {

}
