class MyClass {
  constructor() {
    console.log("Initiate");
  }

  add(arg1, arg2) {
    let result;
    result = arg1 + arg2;
    return result;
  }

  sayHello(str) {
    console.log(str);
  }

  callAnotherFn(arg1, arg2) {
    this.sayHello("Hello World");
    return this.add(arg1, arg2);
  }

  callTheCallback(callback) {
    callback();
  }
}

module.exports = MyClass;
