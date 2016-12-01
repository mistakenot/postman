import {DatabaseContext} from '../../../../shared/test/database-context';

describe("Firebase Inbox Service", () => {
  var db: DatabaseContext;
  var service: any;

  before(done => {
    db = new DatabaseContext();
    service = null;

    db.populate().then(done);
  });

  after(done => {
    db.dispose().then(done);
  });

  it("can read items from the database", () => {
    
  });

});