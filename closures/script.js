// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'andi';

// Creation phase pada Global Context

// name of var = undefined
// nama function = fn()

// HOISTING 

// Actually Selain var & function, ada lagi yang didefine yaitu :
// window = global object
// this = window
// walaupun kita tidak menuliskan code apapun.


// Execution phase

// The others ex:
console.log(sayHello());

var nama = 'Dika';
var umur = 16;

function sayHello(){
    console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
}

// var sayHello = () =>{
//     return `Hello nama saya ${nama}, saya ${umur} tahun.`;
// }