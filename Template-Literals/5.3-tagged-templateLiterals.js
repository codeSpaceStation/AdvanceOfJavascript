// const nama = "Sisi";
// const umur = 23;

//// Template literals biasa
// const str = `Halo, nama saya ${nama}, saya ${umur} tahun.`;

//// Tagged Template
// function coba(strings, ...values) {
// 	// return strings; // parameter strings akan menerima string dari template literals yang dipisahkan oleh ekspression.
// 	return values; // parameter ...values akan menjadi array yang akan menampung secara keseluruhan ekspression yg ada didalam template literals
// }
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;

// console.log(str);

//// Menghasilkan string yang sama seperti sebelumya menggunakan tagged  Template
// function coba(strings, ...values) {
// 	/// Cara yang mudah:
// 	// let result = "";
// 	// strings.forEach((elStr, i) => {
// 	// 	result += `${elStr}${values[i] || ""}`;
// 	// });
// 	// return result;

// 	/// Cara yg ringkas dengan HigherOrderFunction
// 	return strings.reduce((result, elStr, i) => `${result}${elStr}${values[i] || ""}`, "");
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;

// console.log(str);

/// Highlight
/// Kenapa kita melakukan ini kalo hasilnya sama persis seperti template literals?
/// contoh Implementasi sederhananya, kalo kita ingin menampilkan sebuah string hasil pencarian berdasarkan keyword tertentu.
// misal cari berdasarkan nama. nah kita ingin menampilkan hasil pencarian tersebut dengan nama yg dimasukkan di highlight
const nama = "Sisi";
const umur = 23;
// Jika kita menambah var baru misal email maka email ini akan otomatis ke highlight
const email = "sisi@gmail.com";

function highlight(strings, ...values) {
	return strings.reduce((result, elStr, i) => `${result}${elStr}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. Email saya adalah ${email}`;

document.body.innerHTML = str;
