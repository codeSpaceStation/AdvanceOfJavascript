// Functions Expression
/* const tampilNama = function(nama){
  return `Halo, ${nama}`;
}

console.log(tampilNama('sisi'));
 */

/// Arrow Function 1 Parameter
/* const tampilNama = (nama) => { return `Halo, Nama saya ${nama}`;}
console.log(tampilNama('silvi')); */

/// Arrow Function 2 Parameter
// const tampilNama = (nama, waktu) => { 
//   return `Selamat ${waktu}, nama Saya ${nama}`;
// }
// console.log(tampilNama('silvi','pagi'));

/// Implisit return 
/// Jika 1 Parameter atau 1 line syntax / expression(isinya hanya return aja) bisa di ringkas menjadi :
/* const tampilNama = nama =>  `Halo, Nama saya ${nama}`;
console.log(tampilNama('silvi')); */
// Jika tidak menggunakan parameter
// const tampilNama = () =>  `Halo Dunia!`;
// console.log(tampilNama());




///===== Contoh Array Function =====
let mahasiswa = ['sisi', 'silvi ay', 'sela'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//   return nama.length;
// });

// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// jika menjadi object 
// Jika mereturn object seharusnya bisa hanya menggunakan "{}"  tetapi jika "{}" setelah arrow maka js menganggap itu kita sedang melakukan return bukan membuat object jd solusinya "({})"
let jumlahHuruf = mahasiswa.map(nama =>({nama, jumlahHuruf : nama.length}) );


console.table(jumlahHuruf);