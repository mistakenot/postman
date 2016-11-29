import {FirebaseHttp} from "../../src/services";
import * as chai from "chai";

const expect = chai.expect;
const fb = new FirebaseHttp("https://lambda-test-f6747.firebaseio.com/");
/*
describe("firebase", () => {
  it("should retrieve root node", done => {    
    fb.get("test/val").then(a => {
      expect(a).to.equal('123');
      done();
    })
  });

  it('can set a node', done => {
    fb.set("test/set_me", {now: new Date()})
      .then(val => {
        done();
      })
  })
});
*/