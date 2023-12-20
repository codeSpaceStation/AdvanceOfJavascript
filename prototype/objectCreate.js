// 1 Object Literal
// PROBLEM : Tidak efektif untuk membuat object yang banyak

// let mahasiswa = {
//     nama : 'Budi',
//     point : 5,
  
//     belajar : function (intelegence){
//       this.point += intelegence;
//       console.log(`Hello ${this.nama} ! point kamu bertambah!`);
//     }
//   }

// let mahasiswa2 = {
//     nama : 'Andi',
//     point : 23,

//     main : function(jam){
//         this.point = this.point + jam;
//         console.log(`Hello ${this.nama}, Point Kamu berkurang!`);
//     }
// }

/**
 * 
 * 2 Function Declaration
 * Problem nya jika Menggunakan metode ini yaitu method(function)
 * yang di buat di dalam object akan diinisialisasi dan akan tersimpan
 * di dalam memory yang membuat pemborosan, walaupun method/func tsb
 * tidak digunakan atau dipanggli.
 */

const methodMahasiswa = {
    belajar : function(jam){
        this.point += jam;
        console.log(`Hello ${this.nama}, Selamat Belajar!`);
    },

    main : function(jam){
        this.point -= jam;
        console.log(`Hello ${this.nama}, Gass Nongki dan main!!`);
    },
    coding: function(jam){
        this.point += jam * 2;
        console.log(`Hello ${this.nama}, Selamat Otak anda akan burnout!`)
    }
}

function Mahasiswa(nama, point){
    //How this func know that the previous object is an object owned by mahasiswa?
    // so the way is we will use Object.create()
    //we Can make object with parameter. and the parameter value is the parent of the object
    // Jd kita bisa kasih tahu, bikin object baru sambil juga ikut membawa property/method dari object lain.
    let mahasiswa = Object.create(methodMahasiswa);

    mahasiswa.nama = nama;
    mahasiswa.point = point;

    return mahasiswa;
}

let andi = Mahasiswa('andi', 12);

//Cara ini juga mempunyai problem lagi karena kita hanya ingin berkerja (butuh) dengan object mahasiswa saja.
//kita tidak butuh methodMahasiswa.karena methodMahasiswa merupakan object yg dibikin sendiri, sehingga kita
//akan melakukan dua kali kerja. 
// Ada cara agar kita tidak lagi membuat object methodMahasiswa untuk mendukung (dihubungkan) object utama yaitu Mahasiswa.
// Yaitu menggunakan Prototype.

