import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'auth-login-form',
  templateUrl: './auth-login-form.html'
})
export class AuthLoginForm {
  @Output() onSubmit = new EventEmitter<LoginFormModel>();
  @Input() errors: string[];
  @Input() isAuthenticating: boolean;
  
  model = new LoginFormModel();

  submit() {
    this.onSubmit.emit(this.model);
    this.reset();
  }

  reset() {
    this.model = new LoginFormModel();
  }

}

export class LoginFormModel {
  constructor(
    public email = "",
    public password = "",
    public keepSignedIn = false) {}
}