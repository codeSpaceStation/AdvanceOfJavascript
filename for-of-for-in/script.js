//// FOR..OF

/// Case: ARRAY
// const mhs = ["silvy", "sisi", "sela"];

/// Menampilkan dengan for biasa
// for (let i = 0; i < mhs.length; i++) {
// 	console.log(mhs[i]);
// }

/// Menampilkan dengan forEach
// mhs.forEach((m) => console.log(m));

/// Karena array merupakan salah satu iterables object
/// maka kita bisa menggunakan for..of
//penulisan didalam for '()'
// kita representasikan tiap" elemen pd array sbg variable baru apa ~ '(const m)'
// disini kita bisa menggunakan 'const' karena variable 'm'
// tdk akan pernah berubah
// berbeda dgn for biasa yg menggunakan 'let i'
// karena i setiap loopingnya bertambah. jd i berubah
// lalu ~ '(... of NAMA ARRAY)'
// for (const m of mhs) {
// 	console.log(m);
// }

/// Case dimana kita memerlukan index atau i
/// maka jika kita menggunakan forEach itu bisa dgn mudah
// const mhs = ["silvy", "sisi", "sela"];

// mhs.forEach((m, i) => {
// 	console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

/// jika menggunakan for..of, secara default dia tdk punya index
// for(const m, i of mhs){
//   console.log(i);
// }
//
/// jika ingin tetap menggunakan for..of utk menggunakan i kita bisa menggunakan entries
// for (const [i, m] of mhs.entries()) {
// 	console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Case: String
// String merupakan iterables
// ini perbedaan menggunakan forEach
// forEach tdk bisa digunakan utk melooping string karena bukan array (forEach khusus untuk array)
// const nama = "silvy";
// //menggunakan for..of untuk melooping tiap" karakter pd string
// for (const n of nama) {
// 	console.log(n);
// }

// kalau kita paksakan menggunakan forEach
// nama.forEach((n) => console.log(n)); // error
//
//
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
/// Case: NODELIST
// const liNama = document.querySelectorAll(".nama");
// console.log(liNama); // nodeList (bukan array walaupun mirip)
// Jika menggunakan browser terbaru saat ini,
// utk looping nodeList ini kita bisa menggunakan forEach.
// walaupun forEach khusus untuk array.
// jika kita menggunakan browser versi lama, itu ada aja yg tdk mendukung forEach. maka caranya kita harus paksa dulu nodeList jd array murni dulu.
// liNama.forEach((nama) => console.log(nama.textContent));
//
/// Jika menggunakan for..of langsung bisa karena
/// nodeList merupakan iterables
// for (nama of liNama) {
// 	console.log(nama.innerHTML);
// }

//
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
/// Case: ARGUMENTS
// mis:
// function jlhAngka() {
// 	console.log(arguments); /// Arguments (seperti array pdhl bukan)
// }

// jlhAngka(1, 2, 3, 4, 5);

/// Menjumlahkan angka yg ada pada arguments
// function jlhAngka() {
// 	/// kalau array bisa dengan :
// 	// return arguments.reduce((a, i) => a + i);// error
// 	/// kalau dengan forEach juga tdk bisa
// 	// let jlh = 0;
// 	// arguments.forEach((a) => (jlh += a));
// 	// return jlh; // error

// 	/// Maka kita bisa menggunakan for..of
// 	let jlh = 0;
// 	for (const a of arguments) {
// 		jlh += a;
// 	}
// 	return jlh;
// }

// console.log(jlhAngka(1, 2, 3, 4, 5));
//
//
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
///====================================================///
//// FOR..IN
// for of tdk bisa melooping isi dr object karena
// object bukan salah satu iterables
/// object bisa di looping isinya (property) menggunakan for..in

// const mhs = {
// 	nama: "silvy",
// 	umur: 23,
// 	email: "silvylily@gmail.com",
// };

// for (m in mhs) {
// 	console.log(m);
// }

/// Sehingga kalau looping property object gunakan for..in
/// kalau mau looping isi array & iterables object yg lain gunakan for..of

/// Kalau kita ingin mengambil value dari propertynya maka :

const mhs = {
	nama: "silvy",
	umur: 23,
	email: "silvylily@gmail.com",
};

for (m in mhs) {
	console.log(mhs[m]);
}
