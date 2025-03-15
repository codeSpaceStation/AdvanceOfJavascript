/// Konsep this pada arrow Functions



/// Constructor Function
// const Mahasiswa = function (){
//   this.nama = 'sisi';
//   this.umur = 22;

//   this.sayHello = function(){
//     console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`);
//   }
// }

// let sisi = new Mahasiswa();


/// Arrow Function
// tdk semua bisa di buat arrow functions
/* const Mahasiswa = () => {
  this.nama = 'sisi';
  this.umur = 22;

  this.sayHello = function(){
    console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`);
  }
} */

// method bisa
// Tapi ini masih ada problem dlm pemakaian this.
// const Mahasiswa = function(){
//   this.nama = 'sisi';
//   this.umur = 22;

//   this.sayHello = () => {
//     console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`);
//   }
// }


// let sisi = new Mahasiswa();


/// Object Literal
// const mhs1 = {
//   nama : 'sisi',
//   umur : 22,

//   sayHello : () =>{
//     console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`);
//     console.log(this);
//   }
// };

//// ARROW FUNCTION TDK MEMILIKI KONSEP/ Context 'this' ////

///Contoh yg lain untuk meperjelas lagi 'this'
/* const Mahasiswa =  function() {
  this.nama = 'sisi';
  this.umur = 22;

  this.sayHello = function(){
    console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`);
  }

  // Func yg otomatis di jalankan 
  // Ini funct decleration dimana function ini di hoisting
  // Sehingga this ini akan mencari ke global
  // setInterval(function(){
  //   // console.log(this.umur++);
  //   // console.log(this);
  //   console.log(this.umur);
  // },500);
  /// Dapat diatasi dengan arrow function
    setInterval(()=>{
    // console.log(this);
    console.log(this.umur++);
  },1000);
}
let sisi = new Mahasiswa(); */

///===========================================================================
///// CONCLUSION:
//// tdk sembarang mengubah funct ekspresion ->  arrow funct 
/// Tergantung kebutuhan
///=======================================================================













//==============================================
//// Contoh Real arrow function dipakai dmana
//==============================================
const box = document.querySelector('.box');

box.addEventListener('click',function(){

  let first = 'size';
  let second = 'caption';


  if(this.classList.contains(first)){
    // first = temp;
    // first = second;
    // second = temp;
    [first, second] = [second, first];
  }

  this.classList.toggle(first);

  // setTimeout(function(){
  //   console.log(this);
  // },600);

  setTimeout(()=>{
    this.classList.toggle(second);
  },600);

});









