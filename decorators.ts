class Post {
  @processOne()
  @processTwo()
  someFunction () {}
}

function processOne() {
  console.log('Process one.');
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Process one has been called.');
  }
}

function processTwo() {
  console.log('Process two.');
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Process two has been called.');
  }
}

// The decorators are called at runtime not at object instantation