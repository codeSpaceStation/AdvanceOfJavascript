//// 1. HTML Fragments
// const mhs = {
// 	nama: "Sela",
// 	umur: 23,
// 	nim: "1920406023",
// 	email: "sela@gmail.com",
// };

// const el = `<div class="mhs">
// <h3>${mhs.nama}</h3>
// <span class="nim">${mhs.nim}</span>
// </div>`;

//// Case jika mahasiswanya ada banyak
////2. Looping
// const mhs = [
// 	{
// 		nama: "Sela",
// 		nim: "1920406023",
// 	},
// 	{
// 		nama: "Sisi",
// 		nim: "1920406033",
// 	},
// 	{
// 		nama: "Silvy",
// 		nim: "1920406090",
// 	},
// ];

// const el = `<div class="mhs">
// ${mhs
// 	.map(
// 		(val) => `<h3>${val.nama}</h3>
// <span class="nim">${val.nim}</span>`
// 	)
// 	.join("")}

// </div>`;

//// 3. Conditionals
// Ternary
// const lagu = {
// 	judul: "Kau adalah",
// 	penyayi: "Isyana Sarasvati",
// 	feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyayi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

//// 4. Nested
/// atau HTML Fragments bersarang
const mhs = {
	nama: "Sela",
	semester: 5,
	mataKuliah: ["Pemrograman berbasis Mobile", "Pemrograman berbasis Web", "Multimedia", "Analisis dan Perancangan Sistem Informasi"],
};

function cetakMataKuliah(mataKuliah) {
	return `<ol>
  ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester : ${mhs.semester}</span>
  <h4>Mata Kuliah : </h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
