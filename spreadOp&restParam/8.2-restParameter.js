//// REST PARAMETER

// function myFunc(a, b, ...myArgs) {
// 	return `a = ${a}, b = ${b}, dan sisanya ${myArgs}`;
// }
/// Kita bisa menangkap semuanya
// function myFunc(...myArgs) {
// 	return myArgs;
// }
//==================================================
/// Rest parameter hanya bisa digunakan diakhir dari parameter
/// Jadi akan error kalau begini :
// function myFunc(...myArgs, a){
//   return a;
// }
//==================================================
///Secara Default function punya variable arguments
// 'arguments' ini otomatis berisi semua argument yang di kirim pd saat function dipanggil
// function myFunc() {
// 	return arguments;
// }
// tapi hasil dari var 'arguments' tsb tidak berbentuk array tp argument/object, sehingga kita tdk bisa menggunakan method" yg ada pada array
//
/// Jd jika kita ingin menggunakan var 'arguments' kita dpt merubahnya ke array
// function myFunc() {
// 	return Array.from(arguments);
// }
//
/// Selain itu, kita dpt juga menggunakan spead opt untuk merubah ke array
// function myFunc() {
// 	return [...arguments];
// }
/// Tp saat ini kita menggunakan rest parameter untuk mengambil semua argument
// function myFunc(...myArgs) {
// 	return myArgs;
// }
// console.log(myFunc(1, 2, 3, 4, 5, 6));
//
///
//
//
//
//
//
//
//
//
//
///
/// Case : kita akan menjumlahkan semua argument
/// contoh console.log(jumlah(1+2+3+4+5))
/// Saat ini menggunakan rest parameter
/* function jumlahkan(...angka) {
	/// Menggunakan for of (looping biasa)
	// let total = 0;
	// for (const aga of angka) {
	// 	total += aga;
	// }
	// return total;

	/// Menggunakan Reduce
	return angka.reduce((total, curr) => total + curr);
}

console.log(jumlahkan(1, 3, 5, 7, 9));
 */

//
//
/// REST PARM bisa digunakan pd saat array destructuring
/* const kelompokSatu = ["sela", "silvy", "sisi", "sari", "syfa"];
// Dari array kelSatu itu kita ingin setiap nama muncul pertama ketuanya dan kedua adalah wakilnya
// dan sisanya adalah anggota dari kelompok
/// CARA MANUAL
// const ketua = kelompokSatu[0];
// const wakilKetua = kelompokSatu[1];

/// DGN DESTRUCTURING
const [ketua, wakil, ...anggota] = kelompokSatu;
console.log(anggota); */
//
//
//
//
/// OBJECT DESTRUCTURING
/* const team = {
	pm: "syfa",
	frontEnd1: "sisi",
	frontEnd2: "sela",
	backEnd: "silvy",
	uiUx: "sari",
	devOps: "susi",
};

// Misal memisahkan menggunakan object destructuring
// kita pisahkan antara pm(project Manager) dgn sisa team. maka :
const { pm, ...myTeam } = team;
console.log(myTeam); */
//
/// CONTOH UNTUK MELAKUKAN FILTERING PD ARGUMENT YG dikirimkan
// jika kita memanggil functionnya kita akan memfilter nilai" berdasarkan type datanya
// intinya funct(type, nilai");
// jd argument yang dikirim func('num', 1, 3, 'test', false)
// jd kita akan memfilter berdasarkan argument pertama
// jd kita akan menampilkan nilai apa aja yg muncul jika memberikan type di awal argument
function filterBy(type, ...values) {
	// const result = [];
	// values.map((val) => (typeof val === type ? result.push(val) : ""));
	// return result;

	return values.filter((val) => typeof val === type);
}

console.log(filterBy("string", 1, 3, "syfa", false, 9, true, "silvy"));
