//// Algoritma: Ambil semua elemen video
// const videos = document.querySelectorAll("[data-duration]");
// Ubah jd array agar bisa dikasi filter, map & reduce
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//// Algoritma: pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
	.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
	//// Algoritma: Ambil  durasi masing2 video
	.map((item) => item.dataset.duration)
	//// Algoritma: ubah durasi menjadi float, ubah menit menjadi detik
	.map((waktu) => {
		// durasi awalnya -> 11:18 kita pecah menjadi [11, 18]
		const partDuration = waktu
			.split(":")
			// ubah dulu ke float agar bisa di kalkulasikan
			.map((part) => parseFloat(part));
		// Balik(return) durasinya jd detik
		return partDuration[0] * 60 + partDuration[1];
	})
	//// Algoritma: Jumlahkan semua detik
	.reduce((total, detik) => total + detik);
//// Algoritma: Ubah formatnya jd jam menit detik
const jam = Math.floor(jsLanjut / 3600);
// const menit = Math.floor((jsLanjut - jam * 3600) / 60);
// const detik = jsLanjut - jam * 3600 - menit * 60;
// inTutor:
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//// Algoritma: Simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// const jlhVideo = document.querySelector(".jumlah-video");
// jlhVideo.textContent = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
// inTutor
const jlhVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJlhVideo = document.querySelector(".jumlah-video");
pJlhVideo.textContent = `${jlhVideo} Video.`;
