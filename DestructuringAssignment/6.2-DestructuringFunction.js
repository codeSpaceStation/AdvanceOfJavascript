//// Destructuring
/// Case 1:
// function perjumlahanPerkalian(a, b) {
// 	return [a + b, a * b];
// }
// const result = perjumlahanPerkalian(2, 3);
// const jumlah = perjumlahanPerkalian(2, 3)[0];
// const perkalian = perjumlahanPerkalian(2, 3)[1];

// console.log(perkalian);

/// Dengan menggunakan destructuring:
// const [jumlah, kali] = perjumlahanPerkalian(2, 3);

// console.log(jumlah);
// console.log(kali);

/// Case 2 : Return valuenya tambah
// function kalkulasi(a, b) {
// 	return [a + b, a - b, a * b, a / b];
// }
function kalkulasi(a, b) {
	return [a + b, a - b, a * b];
} // undefined jika dipanggil dan diconsole.log
// maka kasih nilai default
// const [tambah, kurang, kali, bagi = "notFound!"] = kalkulasi(2, 3);

// console.log(bagi);

/// Case 3 : kalo kita return valuenya itu array
/// dan kita melakukan destructuring maka urutan var barunya harus sama / bener/ pas, tdk boleh ketukar

// const [kurang, tambah, bagi, kali = "notFound!"] = kalkulasi(2, 3);

// console.log(kurang); // 5

//====//
/// Kalau ingin urutan tidak berpengaruh
/// return value bisa diganti dgn object
// function kalkulasi(a, b) {
// 	return {
// 		tambah: a + b,
// 		kurang: a - b,
// 		kali: a * b,
// 		bagi: a / b,
// 	};
// }

// const { kali, tambah, kurang, bagi } = kalkulasi(2, 3);

// console.log(kurang);

// ================================//
/// ~ Case 4 : Destructuring function arguments
/// Biasanya :
// const mhs1 = {
// 	nama: "Silvy lily",
// 	umur: 22,
// 	email: "silvylily@gmail.com",
// };

// function cetakMhs(nama, umur) {
// 	return `Haloo nama saya ${nama}, umur Saya ${umur} tahun`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));
//
// =================================
//
// function cetakMhs(mhs) {
// 	return `Haloo nama saya ${mhs.nama}, umur Saya ${mhs.umur} tahun`;
// }

// console.log(cetakMhs(mhs1));
//
// ================================
//
/// Menggunakan destructuring
// function cetakMhs({ nama, umur }) {
// 	return `Haloo nama saya ${nama}, umur Saya ${umur} tahun`;
// }

// console.log(cetakMhs(mhs1));
// ======================================================
/// Menggunakan destructuring ini akan sangat berguna apabila objectnya semakin complex
const mhs1 = {
	nama: "Silvy lily",
	umur: 22,
	email: "silvylily@gmail.com",
	nilai: {
		uas: 89,
		uts: 99,
		tugas: 87,
	},
};
//biasanya:
// function cetakMhs({ nama, umur, nilai }) {
// 	return `Haloo nama saya ${nama}, umur Saya ${umur} tahun, dan nilai UAS saya : ${nilai.uas}`;
// }
// destructuring :
function cetakMhs({ nama, umur, nilai: { uas, tugas, uts } }) {
	return `Haloo nama saya ${nama}, umur Saya ${umur} tahun, dan nilai UAS saya : ${uas}`;
}

console.log(cetakMhs(mhs1));
