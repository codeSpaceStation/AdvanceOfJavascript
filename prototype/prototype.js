// function Mahasiswa(nama, point){

//     // let this = Object.create(Mahasiswa.prototype);
 
//     this.nama = nama;
//     this.point = point;

//     //  return  this;

// }

//  Mahasiswa.prototype.belajar = function (jam){
//     this.point += jam;
//     return `Hello ${this.nama}, Selamat belajar!`;
//  }

//  Mahasiswa.prototype.main = function(jam){
//     this.point -= jam;
//     return `Hello ${this.nama}, Gass yok nongki dan main!!`;
//  }

//  Mahasiswa.prototype.coding = function(jam){
//     this.point += jam * 2;
//     return `Hello ${this.nama}, Selamat Otak kamu akan burnout`;
//  }

// let andi = new Mahasiswa('andi', 12);


// versi  class
class Mahasiswa{
    constructor(nama, point){
        this.nama = nama;
        this.point = point;
    
    }

    belajar(jam){
        this.point += jam;
        return `Hello ${this.nama}, Selamat belajar!`;
    }
    main (jam){
    this.point -= jam;
    return `Hello ${this.nama}, Gass yok nongki dan main!!`;
    }
    coding(jam){
    this.point += jam * 2;
    return `Hello ${this.nama}, Selamat Otak kamu akan burnout`;
    } 
}

let andi = new Mahasiswa('andi', 12);
let indah = new Mahasiswa('indah', 15);