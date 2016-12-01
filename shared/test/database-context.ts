import {FirebaseHttp, Schema} from '../src/services';
import * as faker from 'faker';

export class DatabaseContext {
  private _fb: FirebaseHttp;
  private _testRunId: string;

  constructor(
    public databaseUrl = "https://lambda-test-f6747.firebaseio.com/") {

    this._testRunId = faker.random.uuid().toString().substr(0, 5);
    this._fb = new FirebaseHttp(databaseUrl + this._testRunId + "/");
  }

  get(): FirebaseHttp {
    return this._fb;
  }

  dispose(): Promise<any> {
    return this._fb.set("", {})
  }

}