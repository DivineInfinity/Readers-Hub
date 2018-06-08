import Vue from 'vue'
import home from '/client/src/components/home'
import { before, after, describe, it } from "mocha";
import { expect, assert, should } from "chai";
import "sinon";

describe("karma test with Chai", function() {
  it("should expose the Chai assert method", function() {
    assert.ok("everything", "everything is ok");
  });

  it("should expose the Chai expect method", function() {
    expect("foo").to.not.equal("bar");
  });

  it("should expose the Chai should property", function() {
    should.exist(123);
    (1).should.not.equal(2);
  });

  it("should work with ES6 fat arrow function", () => {
    (1).should.not.equal(2);
  });
});
/*describe('home.vue', ()=>{

//Test which will check if the search button expands to take user input
/!*
  Test which will check if pressing enter or
  clicking search button after search input will trigger a search function/event
*!/
/!*Tests which check if clicking on links/buttons will call their respective functions/events
* to load their components*!/

/!*Tests which check if the titles of lists on their respective cards are displayed correctly*!/
  it('should display titles on cards',()=>{
    const Constructor = Vue.extend(home);

    const comp = new Constructor({

    })
  })
});*/
