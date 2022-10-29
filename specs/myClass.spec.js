const myClass = require("../src/myClass");
const myObj = new myClass();
const sinon = require("sinon");
const { expect } = require("chai");

describe.skip("Test suit", () => {
  it(`Test the add method`, () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });

  it(`spy the add method`, () => {
    let spy = sinon.spy(myObj, "add");
    let arg1 = 10,
      arg2 = 20;
    myObj.callAnotherFn(arg1, arg2);
    // sinon.assert.calledTwice(spy)
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(10, 20)).to.be.true;
  });

  it(`spy the callback method`, () => {
    let callback = sinon.spy();

    myObj.callTheCallback(callback);
    expect(callback.calledOnce).to.be.true;
  });

  it("mock sayHello method", () => {
    let mock = sinon.mock(myObj);
    let expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("Hello World");

    myObj.callAnotherFn(10, 20);
    mock.verify();
  });
});

describe("Test suit for stub", () => {
  it(`Stub the add method`, () => {
    const stub = sinon.stub(myObj, "add");
    stub.withArgs(10, 20).onFirstCall().returns(100);
    stub.withArgs(10, 20).onSecondCall().returns(200);

    expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
  });
});
