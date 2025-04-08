//// Destructuring Variable / Assignment

//// Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Silvy Lily"];

/// Jika mengambil elemen sbg variable terpisah dgn cara biasa
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);
/// Maka jika menggunakan teknik destructuring
// const [salam, satu, dua, nama] = perkenalan;

// console.log(nama);
/// Kita bisa meskip elemen yg tidak ingin di ambil/pisah/petakan ke dlm var
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//

/// Kita bisa melakukan swap items (menukar isi dari array)
// cara biasa :
// let a = 1;
// let b = 2;
// let temp;

// console.log(`Sebelum: ${a} ${b}`);
// temp = a;
// a = b;
// b = temp;

// console.log(`Sesudah: ${a} ${b}`);
//
// teknik destructuring:
// let x = 1;
// let y = 2;
// console.log(`Sebelum: ${x} ${y}`);
// [x, y] = [y, x];
// console.log(`Sesudah: ${x} ${y}`);

/// sbg return value pd function
// sehingga func bisa mengembalikan array & arraynya langsung
// ditangkap oleh syntax destructuring
// function coba() {
// 	return [1, 2];
// }

// // biasanya :
// // const a = coba(); // var a jd array
// // console.log(a);
// // console.log(a[0]);
// // destructuring:
// const [a, b] = coba();

// console.log(a);
//
//
/// Mau bongkar banyak array, tp kita tdk tau akan ada berapa elemen
// const [a, b] = [1, 2];
// console.log(a);
// console.log(b);
// bagaimana jika elemen bertambah
// const [a, b] = [1, 2, 3];
// console.log(a);
// console.log(c);
// maka tidak memungkinkan ada variable baru 'c'
/// Maka kita bisa menggunakan Rest parameter
/// *Bisa di simpan dimana saja asal dipastikan array lebih banyak daripada destructuring variablenya
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);
//
//
//
//
//
//
//
//
//
//// DESTRUCTURING OBJECT
// const mhs = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// };

/// Biasnya jika ingin menangkap tiap" propertynya ke variable
// const nama = mhs.nama;
// console.log(nama);
/// Maka jika menggunakan teknik destructuring
// const { nama, umur } = mhs;
// console.log(umur);
// Tidak boleh sembarang namanya/variablenya (harus sama dengan propertynya)
// const { a, b } = mhs;
// console.log(a);
//
//
//

/// Kita bisa membuat assignment tanpa deklarasi object
// ({ nama, umur } = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// });
// console.log(nama);

/// Assign ke  variable baru
// const mhs = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// };

// const { nama: a, umur: b } = mhs;
// console.log(a);

/// Kita bisa memberikan Default value
// const mhs = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// };

// const { nama, umur, email = "default@gmail.com" } = mhs;
// console.log(email);
// Jika data/properti sudah ada maka property tsb yg ditampilkan
// const mhs = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// 	email: "silvy@lily.com",
// };

// const { nama, umur, email = "default@gmail.com" } = mhs;
// console.log(email);

/// Kita juga bisa menggabungkan
/// nilai default + assign ke var baru
// const mhs = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// 	email: "silvy@lily.com",
// };

// const { nama: n, umur: u, email: e = "default@gmail.com" } = mhs;
// console.log(e);

/// bisa juga menggunakan rest parameter
// const mhs = {
// 	nama: "Silvy Lily",
// 	umur: 18,
// 	email: "silvy@lily.com",
// };

// const { nama: n, ...values } = mhs;
// console.log(n);
// console.log(values);
///
///
///
//
//
//
/// Mengambil field pd Object yg object itu dikirim sbg parameter untuk function
const mhs = {
	id: 969,
	nama: "Silvy Lily",
	umur: 18,
	email: "silvy@lily.com",
}; // misal data ini adalah dr API

// kita bisa membuat func untuk mengambil id dr mhs
// function getIdMhs(mhs) {
// 	return mhs.id;
// }

// console.log(getIdMhs(mhs));
//
/// Jika menggunakan Destructuring
/// kita bisa simpan parameternya tdk object padahal yg dikirim object
/// tp yg di tangkap hanya idnya saja (elemen tertentu saja)
/// sisanya diabaikan
/// Sehingga kita bisa mereturn idnya saja
function getIdMhs({ id }) {
	return id;
}

console.log(getIdMhs(mhs));
