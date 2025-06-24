//// Review
/// request API
// $.ajax({
// 	url: "http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=avengers",
// 	success: (movies) => console.log(movies),
// 	error: (e) => console.log(e.responseText),
// }); // this relies on jquery

// if we just want to use ajax from vanilla js it is like this
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
// 	if (xhr.status === 200) {
// 		if (xhr.readyState === 4) {
// 			console.log(JSON.parse(xhr.response));
// 		}
// 	} else {
// 		console.log(xhr.responseText);
// 	}
// };

// xhr.open("get", "http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=how+to+train+your+dragon");
// xhr.send();

/// And now with js modern, we can use technique that more simple way. it is using fetch
// const movies = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=avengers");
// // this has already done a request from the API, but the problem is that what is returned isn't the movie data however its form a promise.
// console.log(movies);

/// well,if, for example, we want to see the contents/ the movies, here's how:
// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=naruto")
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((er) => console.log("semua Error: " + er.message));

/// ===========================================/
//// Promise
// last video 4:56

////////////////////====================
///REVIEW AGAIN
// using ajax
// $.ajax({
// 	url: "http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=naruto",
// 	success: (movies) => console.log(movies),
// });

// using ajax with version vanilla js
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
// 	if (xhr.status === 200) {
// 		if (xhr.readyState === 4) {
// 			console.log(JSON.parse(xhr.response));
// 		}
// 	} else {
// 		console.log(xhr.responseText);
// 	}
// };

// xhr.open("get", "http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=naruto");
// xhr.send();

// cara lebih simple di js modren
// const movies = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=naruto"); //simpan dlm var movies

// console.log(movies); // jalankan moviesnya
// maka yang ditampilkan : Promise{<pending>}
// ini sudah melakukan request hanya satu baris
// tapi yang di return buka data filmnya(object) tapi bentukny promise
// sehingga fetch -> simple hanya satu baris -> bentuknya promise

/// Kalo mau lihat isinya
// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=naruto")
// 	.then((response) => response.json())
// 	.then((response) => console.log(response));

/////==========~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=//
////PROMISE
// promise -> janji / kita berjanji
/// Promise -> itu adalah sebuah object yang merepresentasikan keberhasilan / kegagalan dr sebuah event yang asynchronous (jd dia yg menentukan berhasil/ gagal) yang akan terjadi di masa yang akan datang
// jadi yang namanya janji itu pasti ada 2 yaitu :
/// Janji (terpenuhi/ ingkar)
/// Kalo di js:
// ini state/ keadaan :
/// janji ~> state, terpenuhi ~> fulfilled, ingkar ~> rejected, waktu tunggunya / sblm janjinya terpenuhi/tidak ~> pending
/// states(fulfilled/ rejected / pending)
// ini fungsi callback :
/// untuk menjalankan keadaan ini ada 3 fungsi callback yang harus diingat :
/// callback (
//resolve ~> ketika janjinya terpenuhi /
// reject  ~> ketika janjinya tdk terpenuhi /
// finally ~> ini ketika waktu tunggunya selesai (baik itu janjinya terpenuhi maupun tdk)
///  )

///di dalam promise ini ada aksi yang akan kita lakukan ketika janjinya terpenuhi maupun tdk
/** aksi (
 * then ~> kalo terpenuhi /
 * catch ~> kalo janjinya tdk terpenuhi
) */

// Promise dipakai biasanya ketika kita mau request ke sebuah API

/// Implementasi sederhana / contoh sederhana (tdk request ke API) -I-
/* let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
	if (ditepati) {
		resolve("Janji telah ditepati!");
	} else {
		reject("Ingkar janji..");
	}
});

// Menjalankan secara langsung
// console.log(janji1);

// kalau mau tangkap resolve atau rejectnya:
janji1.then((response) => console.log("OK! : " + response)).catch((response) => console.log("Not Ok! : " + response)); */

/// Contoh II :
// kit bikin supaya janjinya tdk langsung ditepati,
// tp nunggu proses dulu,
// karena implementasinya di yg sebenarnya memang gitu, ada waktu untuk menepati janjinya/ tdk menepati janjinya
// karena bisa jadi datanya banyak/ prosesnya compleks sehingga tdk langsung beres.
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
// 	if (ditepati) {
// 		setTimeout(() => {
// 			resolve("Janji ditepati stlh a few sec.. ");
// 		}, 3000);
// 	} else {
// 		setTimeout(() => {
// 			reject("Janji tdk ditepati stlh a few sec..");
// 		}, 2000);
// 	}
// });

// jalankan agar terlihat synchronous
// console.log("mulai");
// panggil promise
// console.log(janji2); /// jika hanya begini kita bisa lihat bahwa promisenya masih pending tp gk selesai" karena kita belum jalanin then

//janji2.then() ~> promisenya mulai di jalanin
// ()=> console.log(janji2) ~> ini ketika promisenya sudah selesai
// console.log(janji2.then(() => console.log(janji2)).catch(() => console.log(janji2)));

// tapi jika kita hanya menulisnya begini :
// janji2.then((response) => console.log("OK! : " + response)).catch((response) => console.log("NOT OK! : " + response));
// kita tdk dapat melihat pendingnya
// pendingnya tidak kelihatan karena dijalanin langsung didalamnya.

/// kita tambahkan satu method yaitu finally
// method finally dijalankan ketika salah satu dari method then atau catch ini sudah siap dijalankan
// artiny ketika promisenya sudah tdk pending lagi, finally dulu dijalanin baru salah satu dari then / catch
// janji2
// 	.finally(() => console.log("Selesai menunggu!"))
// 	.then((response) => console.log("OK! : " + response))
// 	.catch((response) => console.log("NOT OK! : " + response));

// jadi apa pun isi dari variabel ditepati finally dijalanin dulu
// biasanya method finally ini digunakan kalau kita nambahin anim loading.
// jd pada saat mulai jalan promisenya anim loadingnya dijalanin, begitu finally matiin anim loadingnya
// console.log("selesai");

// ====//
//// didalam promise ada sebuah method yang namanya  all

/// Promise.all()
/// ini untuk menjalankan ketika kita memiliki banyak promise yang mau di jalanin sekaligus

/// Contoh :
// kita akan connect ke 2 API yang berbeda
// API 1 : untuk mengambil data film
const film = new Promise((resolve) => {
	// mis data filmnya udh didapat utk beberapa waktu tertentu
	setTimeout(() => {
		// anggap aja kita mendapatkan array of object
		resolve([
			{
				judul: "naruto",
				penulis: "Masashi kishimoto",
				rating: 8.4,
			},
		]);
	}, 2000);
});

// connect ke API yang lain (API 2 : cuaca)
const cuaca = new Promise((resolve) => {
	setTimeout(() => {
		resolve([
			{
				kota: "Jakarta",
				temperatur: 28,
				kondisi: "Berawan",
			},
		]);
	}, 1000);
});

/// jika kita jalanin satu"
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

/// Kita bisa jalanin sekaligus
// didalam all() kita bisa simpan array yg menyimpan promise" nya
// Promise.all([film, cuaca])
// .then((response) => console.log(response));

// Kalo kita tdk ingin mengabungkan arraynya seperti sblmnya
// yang dimana menghasilkan array didalam array
// jika kita ingin menjalankan sekaligus tapi hasilnya ingin terpisah:
Promise.all([film, cuaca]).then((response) => {
	const [film, cuaca] = response;

	console.log(film);
	console.log(cuaca);
});
