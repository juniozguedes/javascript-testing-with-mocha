const assert = require('chai').assert;
const app = require('../app');

//Results in a Global scope so you don't need to repeat yourself

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

// Main


describe('App', function(){
  describe('SayHello()', function(){   //To organize in a test section just for these 2 SayHello test cases!
    it('app should return hello', function(){
      assert.equal(sayHelloResult,'hello');  // This method specifies the function itself from app.js using a Global scope
    });
    it('SayHello should return type string', function(){   // In this block we are running another test! 2 tests in this SayHello section!
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function(){ //To organize in a test section just for these 2 addNumbers cases!
    it('addNumbers result should be above 5', function(){
      assert.isAbove(addNumbersResult, 5);
    });
it('addNumbers should return type number', function(){ //A fourth block to test if the result type will be a number in the same section of the other addNumbers case!
  assert.typeOf(addNumbersResult, 'number');
  });
});
});
