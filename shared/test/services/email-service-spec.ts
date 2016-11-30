import {FirebaseHttp, IEmailService, EmailService} from '../../src/services';
import {EmailModel} from '../../src/models';
import * as chai from 'chai';
import * as faker from 'faker';
import "mocha";

const expect = chai.expect;
const fb = new FirebaseHttp("https://lambda-test-f6747.firebaseio.com/");

describe("[Walking Skeleton] EmailService", () => {
  var service: IEmailService;
  var userId: string;

  before(() => {
    service = new EmailService();
    userId = faker.random.uuid();
  });
  
  it("returns EmailHeader object when given valid parameters with username", done => {
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
        expect(result.subject).to.eq(email.subject)
        done();
      })
      .catch(e => {
        done(e);
      })
  });
});

describe("[Unit Test] EmailService", () => {
  var service: EmailService;

  beforeEach(() => {
    service = new EmailService();
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