// function init(){
//   let nama = 'dika';
//   let umur = 18;
//   function showName(){
//     console.log(nama);
//     console.log(umur);
//   }

//   console.dir(showName);
// }

// init();




/* # Example */
// function init(){
//   let nama = 'dika';

//   function showName(){
//     console.log(nama);
//   }

//   return showName;
// }

// let callName = init();
// callName();



/* More from ex# */
// function init(){

//   // function showName(nama){
//   //   console.log(nama);
//   // }

//   // return showName;

//   /* Shorten to anynomus function(func without name) */
//   return function(nama){
//     console.log(nama);
//   }
// }

// let callName = init();
// callName('budi');














/* ~ WHY USING CLOSURE? ~
[1] FOR CREATE FUNCTION FACTORIES
EX:
*/

// function sayGreets(time){

//   return function(name){
//     console.log(`Hello ${name}, Good ${time}... have a nice day!`);
//   }
// }

// let goodMorning = sayGreets('Morning');
// let goodAfternoon = sayGreets('Afternoon');
// let goodNight = sayGreets('Night');

// // goodMorning('dika');
// // goodNight('karina');

// console.dir(goodAfternoon('dede'));




/* [2] FOR MAKE AS IF WE HAVE PRIVATE METHOD 
eX :
*/

// let add = function (){
//   let counter = 0;
//   return function(){
//     return ++counter;
//   };
// }


// counter = 100;

// let count = add();

// console.log(count());
// console.log(count());
// console.log(count());



/* Immediately invoked function :*/
let add = (function (){
  let counter = 0;
  return function(){
    return ++counter;
  };
})();


counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());