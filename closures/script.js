// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'andi';

/** Creation phase pada Global Context */

// name of var = undefined
// nama function = fn()

// HOISTING 

// Actually Selain var & function, ada lagi yang didefine yaitu :
// window = global object
// this = window
// walaupun kita tidak menuliskan code apapun.


// Execution phase

// The others ex:

// console.log(sayHello());
// var nama = 'Dika';
// var umur = 16;


// function sayHello(){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// var sayHello = () =>{
//     return `Hello nama saya ${nama}, saya ${umur} tahun.`;
// }

/**
 * Ketika di visualizer ketika saat masuk menjalankan function,
 * Func seolah" menjalankan execution context sendiri
 * Jd jika ketemu func executenya gk global lagi
 */
 // Maka jika ketemu func, dia seolah":
// Func membuat Local Execution context
// Yang didalamnya terdapat juga creation dan execution phase
// Bedanya dengan local execution context:
// selain kita bisa akses WINDOW
// kita juga bisa akses ARGUMENTS
// didalamnya juga terdapat hoisting (local)


/*### Another Ex / study case: */
// var nama = 'dika';
// var username = '@dikakeren';

// function cetakUrl(username){
//     var instagramUrl = 'https://instagram.com/';
//     return instagramUrl + username;
// }

// console.log(cetakUrl(username));



/*### Another Ex / study case: */
// function a(){
//     console.log('ini func A');

//     function b(){
//         console.log('ini func B');

//         function c(){
//             console.log('ini func C');
//         }

//         c();
//     }

//     b();
// }

// a();


/* ### Another Ex: */
// var nama = 'dika';
// var username = '@dikakeren';

// function cetakUrl(){
//   // console.log(arguments);
//   var instagramUrl = 'https://instagram.com/';
//   return instagramUrl + username;
// }

// console.log(cetakUrl('@dededoremi', '@budi'));

/* exercise: */
function callName(){
  var nama = 'dika';
  console.log(nama);
}

function callNameTwo(){
  console.log(nama);
}


console.log(nama);
var nama = 'dede';
callName();
callNameTwo('karina');
console.log(nama);


// Output :
// undefined
// dika
// dede
// dede