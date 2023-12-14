// 2. Function Declaration

function Mahasiswa(nama, point){
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.point = point;

  mahasiswa.nongkrong = function(jam){
    mahasiswa.point -= jam;
    console.log(`Hello ${nama}, Nongkrong Yuk!`);
  }
  return mahasiswa;
}

let mahasiswa1 = Mahasiswa('fatur', 7);
mahasiswa1.nongkrong(2);
console.log(mahasiswa1); // Output : { nama: 'fatur', point: 5, nongkrong: [λ] }