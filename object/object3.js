// 3. Constructor Function 
function Mahasiswa(nama, point){
  this.nama = nama;
  this.point = point;

  this.belajar = function(jam){
    this.point += jam;
    console.log(`Hello ${this.nama} ! point kamu bertambah!`);
  }

  this.main = function(jam){
    this.point -= jam;
    console.log(`Hello ${nama}, Nongkrong Yuk!`);
  }
}


let fatur = new Mahasiswa('fatur', 10);
fatur.main(3);
fatur.belajar(5);

console.log(fatur); // Output : Mahasiswa { nama: 'fatur', point: 12, belajar: [λ], main: [λ] }