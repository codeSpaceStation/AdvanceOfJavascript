//// Spread Operator
//// Memecah iterables menjadi single Element
// const mhs = ["silvy", "sisi", "sela"];

// console.log(mhs); // Array biasa
// console.log(...mhs);
/// Jika kita masuk kedalam elemen arraynya
/// maka isi(string : iterables) element akan di pecah
// console.log(...mhs[0]);

//// Kapan Spead operator digunakan?
/// Contoh penggunaan
/// ~> Menggabungkan 2 atau lebih array
// const mhs = ["silvy", "sisi", "sela"];
// const dosen = ["fahri", "fira", "fery"];
// kita ingin menggabungkan ke dua array sebelumnya
// const orang = [...mhs, ...dosen];
// console.log(orang);
//
/// Jika kita menulisnya dengan begini :
// const orang = [mhs, dosen];
// console.log(orang); // orang berisi: array didalam array
//
/// Kita juga dapat menggunakan cara yang lain
/// yaitu dengan method array yaitu concat
// const orang = mhs.concat(dosen); // hslnya sama dengan speadOpt
// console.log(orang);
//
//
/// Tapi jika kita menggunakan spead operator kita bisa lebih
/// flexsible jika kita ingin menambahkan elemen array di tengah
/// elemen
// const orang = [...mhs, "beni", ...dosen];
// console.log(orang);
//
//
//
//
//
/// ~> Meng-copy nilai pd Array
/* const mhs = ["silvy", "sisi", "sela"];
// casenya kita ingin membuat array baru dgn valuenya
// sama dengan array sebelumnya (mhs)
// INI CARA PEMULA (salah)
const newMhs = mhs;
// jika di print maka ini menampilkan isi yang sama dgn previous array
console.log(newMhs);
//
// Problemnya jika kita ingin menimpa elemen/ isi pertama dari
// array baru maka:
newMhs[0] = "fivi";
console.log(newMhs); // kita berhasil menimpa tetapi coba kita lihat array asal
console.log(mhs); // isi array ini ikut berubah, padahal kita hanya ingin mengganti isi array yang baru (array copy-an). 
// INI BUKAN BENAR" MENG-COPY
// karena newMhs = mhs -> artinya kita membuat referensinya
// jd tetap saja variable neMhs nunjuknya/merujuknya ke array mhs (array utamanya) */
//
//
// INI CARA ADVANCE (BENER)
/* const mhs = ["silvy", "sisi", "sela"];

const newMhs = [...mhs]; // isi newMhs sama dgn mhs tp bener" copy-annya
// console.log(newMhs);
// tp jika kita ubah/timpa isinya
newMhs[0] = "vifi";
console.log(newMhs); // elemen pertama berubah
console.log(mhs); // elemen awalnya tetap
 */

//
//
//
//
//
/// ~> Menyimpan isi dari text di nodelist ke array
const liNama = document.querySelectorAll("li");

// console.log(liNama[0].textContent);// tiap" ini akan dimasukkan ke dlm array

/// CARA LOOPING BIASA / MANUAL
/* const mhs = [];
for (let i = 0; i < liNama.length; i++) {
	mhs.push(liNama[i].textContent);
}

console.log(mhs); */

/// CARA YANG LEBIH SINGKAT
/// menggunakan highorder func map
// const mhs = liNama.map((mhs) => mhs.textContent);// ini error
// karena liNama adlh nodelist maka method map tdk tersedia
/// MAKA KITA UBH DULU MENJADI ARRAY dgn spread agar tesedia
/* const mhs = [...liNama].map((mhs) => mhs.textContent);
console.log(mhs);
 */
//
//
//
//
//
//
//
//
/// ~> CONTOH PRAKTIKAL
/// KITA INGIN MENGHOVER TIAP STRING/HURUF DARI HEADING MENJADI BESAR / DI SCALE
/// (DIHOVER MAKA AKAN ADA ANIMASI PERHURUF)
// jd caranya :
// kita ubh string menjadi single elemen (spread)

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent];
console.log(huruf);
// sisipkan text span kedalam string
// cth <h1> <span>S</span><span>e</span>..</h1>
const editHuruf = huruf.map((h) => `<span>${h}</span>`).join("");
console.log(editHuruf);
//timpa editHuruf ke variable nama
nama.innerHTML = editHuruf;
