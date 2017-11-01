const assert = require('chai').assert;

//const sayHello = require('../app').sayHello; // This method specifies the function sayHello inside app.js
//const addNumbers = require('../app').addNumbers;
const app = require('../app'); //This method doesn't explore a single function but the whole document app.js


//Results in a Global scope so you don't need to repeat yourself

sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers()


describe('App', function(){

  it('app should return hello', function(){
    //let result = app.sayHello(); Since we're using a Global Results scope, we don't need these guys anymore
    //assert.equal(result,'hello'); // OLD METHOD (currently in comment to preserve another methodology, also code studying)
    assert.equal(sayHelloResult,'hello');  // This method specifies the function itself from app.js using a Global scope
    //assert.equal(app(),'hello'); This method doesn't explore a single function but the whole document app.js
  });

  // In this block we are running another test! 2 tests in this doc
 it('SayHello should return type string', function(){
   //let result = app.sayHello(); OLD METHOD
   assert.typeOf(sayHelloResult, 'string');
 });

it('addNumbers result should be above 5', function(){
  //let result = app.addNumbers(5,9); OLD METHOD
  assert.isAbove(addNumbersResult, 5);
});

//A third block to test if the result type will be a number
it('addNumbers should return type number', function(){
  //let result = app.addNumbers(5,9); OLD METHOD
  assert.typeOf(addNumbersResult, 'number');
});

});
