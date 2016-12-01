import {FirebaseHttp, IEmailService, EmailService, Schema} from '../../src/services';
import {EmailModel} from '../../src/models';
import {DatabaseContext} from '../database-context';
import * as chai from 'chai';
import * as faker from 'faker';
import "mocha";

const expect = chai.expect;
const fbUrl = "https://lambda-test-f6747.firebaseio.com/";
const fb = new FirebaseHttp(fbUrl);

describe("[Walking Skeleton] EmailService", () => {
  var service: IEmailService;
  var userId: string;
  var db: DatabaseContext;

  before(() => {
    db = new DatabaseContext();
    service = new EmailService(db.get());
    userId = faker.random.uuid();
  });

  after(done => {
    db.dispose().then(done);
  });
  
  it("Creates valid email content and header in database.", done => {
    let email = {
      to: "bob@email.com",
      from: "tim@email.com",
      content: "Where are ya pal?",
      subject: "G'Day"
    }

    service.createEmail(userId, email)
      .then(result => {
        expect(result.from).to.eq(email.from);
        expect(result.to).to.eq(email.to);
        expect(result.subject).to.eq(email.subject);
        expect(result.id).to.not.be.undefined;

        let url = Schema.userData.user(userId).emailHeader.item(result.id)._;

        db.get().get(url)
          .then(val => {
            expect(val.from).to.eq(email.from);
            expect(val.to).to.eq(email.to);
            expect(val.subject).to.eq(email.subject);
            done();
          })
          .catch(e => {
            done(e);
          })
      })
      .catch(e => {
        done(e);
      })
  });
});

describe("[Unit Test] EmailService", () => {
  var service: EmailService;

  beforeEach(() => {
    service = new EmailService(fb);
  });

  describe("createEmail", () => {
    it("returns error when invalid object is passed", done => {
      let parameter: EmailModel = {
        to: "this-is-not-a-valid-model",
        from: "asda",
        subject: "",
        content: ""
      }

      service.createEmail("", parameter)
        .then(result => done(new Error("createEmail Returned OK")))
        .catch(err => done());
    })
  });
})