const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

/// Mencari angka >= 3
/// Menggunakan looping biasa :
// for
// let newAngka = [];
// for (let i = 0; i <= angka.length; i++) {
// 	if (angka[i] >= 3) {
// 		newAngka.push(angka[i]);
// 	}
// }

// Answere :
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
// 	if (angka[i] >= 3) {
// 		newAngka.push(angka[i]);
// 	}
// }
// console.log(newAngka);

/// ==== Kalo menggunakan filter ====
// const newAngka = angka.filter((val) => val >= 3);

// console.log(newAngka);

//// ===== Menggunakan map =====
//// Map : artinya kita akan memetakan tiap" elemen yang ada di arraynya menggunakan function yang baru
//// Contoh : kalikan semua angka dengan dua
// const newAngka = angka.map((val) => val * 2); // telusuri semua elemen yang ada pd angka lalu tiap" elemenya dikali 2
// console.log(newAngka);
// // tidak mengubah isi dari array angkanya
// console.log(angka);

//// ===== Menggunakan Reduce =====
//// REDUCE -> untuk melakukan sesuatu terhadap seluruh elemen pd arraynya
/// Contoh : array angka dijumlahkan semua isinya (-1+8+9+1+4...)
//// Reduce butuh dua parameter
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue); // currentValue -> elemen array yg sedang dilooping.
// accumulator -> hasil dr prosesnya. cth: (-1 + 8)  7 -> accu
//// secara default ada satu nilai setelah currentValue di return. Dan hal tersebut adalah nilai awal. Jika tdk dituliskan di situ nilai awalnya adalah 0.
/// Sehingga ada nol di sini:
/// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
//// nanti kita bisa mengubah nilai awal 0 -> misal 5 maka
/// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 -> 31
//// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

//// ===== Method Chaining ======
/// Artinya kita bisa menggabuntkan function" pd highorderFunction ini dlm satu kali eksekusi, gk perlu disimpan dlm variable dulu
/// Contoh: Cari angka > 5, setelah itu hasilnya dikalikan 3, dan selanjutnya di jumlahkan
const hasil = angka
	.filter((val) => val > 5) // [8,9,9]
	.map((val) => val * 3) // [24, 27, 27]
	.reduce((acc, curr) => acc + curr); // 78

const hsl = angka
	.filter((val) => val > 5) // [8,9,9]
	.map((val) => val * 3) // [24, 27, 27]
	.map((val) => val / 2)
	.reduce((acc, curr) => acc + curr);
console.log(hsl);
