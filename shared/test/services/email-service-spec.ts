import {FirebaseHttp, IEmailService, EmailService} from '../../src/services';
import * as chai from 'chai';
import * as faker from 'faker';
import "mocha";

const expect = chai.expect;
const fb = new FirebaseHttp("https://lambda-test-f6747.firebaseio.com/");

describe("Walking Skeleton - email-service.ts", () => {
  var service: IEmailService;
  var userId: string;

  before(() => {
    service = new EmailService();
  });
  
  it("should create new content and header entries for a new email", done => {
    let email = {
      to: "bob@email.com",
      from: "tim@email.com",
      content: "Where are ya pal?",
      subject: "G'Day"
    }

    service.createEmail(email)
      .then(result => {
        expect(result.from).to.not.eq(undefined);
        done();
      })
      .catch(e => {
        done(e);
      })
  });
});
