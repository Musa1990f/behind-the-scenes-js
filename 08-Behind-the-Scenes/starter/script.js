'use strict';

// function calcAge(birthYear){
//   const age = 2037 - birthYear;

//   function printAge(){
//     const output = `Your are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if(birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;

//       // creating new variable with the same name as the outer scope variable
//       const firstName = ' steven';

//       // reassigning outer scope variable
//       output = 'New output';
      
//       const str = ` Oh your a millennial${firstName}`;
//       console.log(str);
//     }
//     console.log(millennial);
//   }
//   printAge();

//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);


// Hoisting and tdz practice

// Hoisting with Variables
// console.log(me);// will print undefined
// console.log(job);// will print error

// console.log(year);// also this one


// var me = 'Jonas';
// let job = 'teacher';
// const year = 1990;

//#2 Hoisting with functions

//#1 function declaration
// console.log(addDecl(2,3));// prints out 5
// console.log(addExp(2,3));// prints out undefined
// console.log(addArr(2,3));// Prints out undefined


// function addDecl(a,b){
//   return a + b;
// }

// //#2 function expression and arrow functions
// const addExp = function(a,b){
//   return a + b;
// }

// var addArro = (a,b) => a + b;


// this.keyword how it works

const jonas = {
  year : 2037,
  calcAge : function(){
    console.log(2037 - this.year);
  }
};
jonas.calcAge();

// borrowing calcAge from jonas object

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();