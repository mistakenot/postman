import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

var config = {
  apiKey: "AIzaSyA0seLjpuC2nawzgrQ4WwqyRrEVwj_M_Ow",
  authDomain: "lambda-test-f6747.firebaseapp.com",
  databaseURL: "https://lambda-test-f6747.firebaseio.com",
  storageBucket: "lambda-test-f6747.appspot.com",
  messagingSenderId: "917194931627"
}

const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

export const bootstrapFirebase = () => {
  return AngularFireModule.initializeApp(config, authConfig);
}