
// const methodMahasiswa = {
//     belajar : function(jam){
//         this.point += jam;
//         console.log(`Hello ${this.nama}, Selamat Belajar!`);
//     },

//     main : function(jam){
//         this.point -= jam;
//         console.log(`Hello ${this.nama}, Gass Nongki dan main!!`);
//     },
//     coding: function(jam){
//         this.point += jam * 2;
//         console.log(`Hello ${this.nama}, Selamat Otak anda akan burnout!`)
//     }
// }

function Mahasiswa(nama, point){
    // let mahasiswa = Object.create(methodMahasiswa);

    this.nama = nama;
    this.point = point;

    // return mahasiswa;
}


Mahasiswa.prototype.belajar = function(jam){
    this.point += jam;
    console.log(`Hello ${this.nama}, Selamat Belajar!`);
}

Mahasiswa.prototype.main = function(jam){
    this.point -= jam;
    console.log(`Hello ${this.nama}, Gass Nongki dan main!!`);
    
}

Mahasiswa.prototype.coding = function(jam){
    this.point += jam * 2;
    console.log(`Hello ${this.nama}, Selamat Otak anda akan burnout!`)
}

let andi = new Mahasiswa('andi', 12);