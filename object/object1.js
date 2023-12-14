/* 1. Object Literal */

let mahasiswa = {
  nama : 'Fatur',
  point : 5,

  belajar : function (intelegence){
    this.point += intelegence;
    console.log(`Hello ${this.nama} ! point kamu bertambah!`);
  }
}

mahasiswa.belajar(2);
console.log(mahasiswa.point); //  Output : 7