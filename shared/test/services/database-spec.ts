import {Database, FirebaseHttp} from '../../src/services';

describe("firebase", () => {
  it('should create a new user', done => {
    let db = new Database(new FirebaseHttp("https://lambda-test-f6747.firebaseio.com/"));
    db.createForNewUser("timathoy").then(v => {
      done();
    });
  })
});
