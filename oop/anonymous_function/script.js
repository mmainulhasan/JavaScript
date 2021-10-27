// JavaScript has function level scoping.
// All variables and functions defined within the anonymous function aren’t available to the code outside of it, 
// effectively using closure to seal itself from the outside world.
// Anonymous or self-executing function called by itself.
(function(){
  console.log('Hello World!');
})();

// firstName,lastName is the parameter of the funciton 
(function(firstName,lastName){
  console.log('Hello '+firstName+' '+lastName);
})('Mainul','Hasan'); //Mainul & Hasan arguments of the parameter

// Anonymous function
(function(){
  //Normal code goes here
   console.log('Hi');
})
// Those two little brackets cause everything contained in the preceding parentheses to be executed immediately.
();

(function(){
  var foo = 'Hello';
  var bar = 'World!'
  
  function baz(){
      return foo + ' ' + bar;
  }
})();

 //These all throw exceptions:
// console.log(foo);
// console.log(bar);
// console.log(baz());

(function(){
  var foo = 'Hello';
  var bar = 'World!'
  
  function baz(){
      return foo + ' ' + bar;
  }

  window.baz = baz; //Assign 'baz' to the global variable 'baz'...
})();

console.log(baz()); //...and now this works.

//It's important to note that these still won't work: 
// console.log(foo);
// console.log(bar);

// One of the major benefits of this pattern, as seen on the last two lines of the previous example, 
// is that you can limit access to variables and functions within your closure, 
// essentially making them private and only choosing to expose an API of your choice to the global scope.

(function(window){
  var foo = 'Hello';
  var bar = 'World!'
  
  function baz(){
      return foo + ' ' + bar;
  }

  //In this context, 'window' refers to the parameter
  window.baz = baz;
})(window); //Pass in a reference to the global window object

console.log(baz());

(function(a){
  console.log(a === window); //Returns 'true'
})(window);

// (function(window, document, $, undefined){
//   var foo;
//   console.log(foo === undefined); //Returns 'true'
// })(window, document, jQuery);

// (function(mark, loves,$, drinking, coffee){
//   mark.open('http://www.google.com'); //window
//   loves.getElementById('menu'); //document
//   drinking('#menu').hide(); //jQuery
//   var foo;
//   console.log(foo === coffee); //undefined
// })(window, document, jQuery);

// Calculating factorial by anonymous function
alert((function factorial(n) {
  return (n <= 1)? 1 : factorial(n - 1) * n;
})(10));

alert((function fibo(n){
  return(n<2)?n:(fibo(n-1)+fibo(n-2));
})(20))





