/// Calback
/* definisi :
* Sebuah function yang dikirimkan sebagai parameter pada function yang lain

* function yang dieksekusi setelah fungsi lain selesai dijalankan

*/
/// contoh Syncronous Callback
// this function will send to another function as param
// function halo(nama) {
// 	alert(`Selamat datang ${nama} `);
// }
// this function will accept param in the form of funct
// parm callback => can be name anything
/* function tampilkanPesan(callback) {
	// var to store name from user
	const nama = prompt("Masukkan nama : ");
	// var nama get in to function halo(nama) as param
	callback(nama);
} */

// so the param [callback] is function [halo(nama)] and that function is call [callback(nama)] inside funct [tampilkanPesan(nama)]

// tampilkanPesan(halo); // so halo isn't a variable but a function. And we don't write it with brackets, because with brackets it will be executed immediately. so if we only write the name of function, it won't. it will wait for the function to be called in the function tampilkan pesannya

/// We can also just not make new function
// we can make anonymous function/ arrow function like this:
// tampilkanPesan((nama) => alert(`Selamat Datang ${nama}`));
//
//=============================================

// anoher example:
// we have var that contains array of object
// later we'll consider this as JSON
// const mhs = [
// 	{
// 		nama: "Silvy sisi",
// 		nim: "192820",
// 		email: "silvysisi@gmail.com",
// 		prodi: "Teknik informatika",
// 		idDosenWali: 1,
// 	},
// 	{
// 		nama: "Sela Rara",
// 		nim: "192821",
// 		email: "selarara@gmail.com",
// 		prodi: "Teknik informatika",
// 		idDosenWali: 2,
// 	},
// 	{
// 		nama: "Sahrini susi",
// 		nim: "192822",
// 		email: "sahrini@gmail.com",
// 		prodi: "Teknik informatika",
// 		idDosenWali: 3,
// 	},
// ];

// We want to showing each name from var to console.log
// mhs.forEach((m) => console.log(m.nama)); // this is highorder funct, which is this funct usually that param have callback

// so we'll get into asyncronous
// but let see this is the syncronous with showing
// start and finish
// console.log('mulai');
// mhs.forEach((m) => console.log(m.nama));
// console.log('Selesai');
// later, the data will not as simple as like this and get data have the form as array . so assume that data is have a lot of value/data or assume it will get data from API in others server's/ the others API's. and usually it needs more times. and if the time is long then this "console.log(selesai)" will show after it's wait until the [mhs.forEach..] is finished. Because it "BLOCKING".it cause syncronous, so it blocked, it doesn't show selesai before mhs.forEach.. finished
/// So we'll try to simulate with have data or more process.
// console.log("mulai");
// mhs.forEach((m) => {
// 	for (let i = 0; i < 10000000; i++) {
// 		let date = new Date();
// 	}
// 	console.log(m.nama);
// });
// console.log("Selesai");
// so it'll need much of time to showing/ waiting to show 'selesai'
// So assuming it is not finished, the script below will not be executed because it is synchronous.
//
//==========================================-=-=-=-=-
//// Asyncronous Callback
/// so how if we change the simulate code's to asyncronous
/// so i want to create a function that when run, it will request data using ajax
// and i already have data as json in this directory. but this data should be taken from API. because of this just simulate so it will from this dir.

// so this function will accept  3 param:
// url -> the address where the data is stored/ or it'll can be change into API
// success -> (function callback) when success what is to do.
// error -> (function callback) when error what is to do.
/// So this is ajax use vanilla js
/* function getDataMahasiswa(url, success, error) {
	// we'll run ajax
	let xhr = new XMLHttpRequest();

	// when the state is ready, run this function
	xhr.onreadystatechange = function () {
		// if the readystate is 4
		// 4 -> meant is when we want to request as asyncronous using ajax
		// 4 it is meant ready (sudah ready)/ it is last state if ready
		// because the state changes from 0 to 4, and each state has its own condition.
		if (xhr.readyState === 4) {
			// 200 -> okay
			// we can access a page. in the case, the page is mahasiswa.json
			// if it already success, run the funct success
			if (xhr.status === 200) {
				// if already okay, so we need respone
				// and we are going to cover it with callback function
				success(xhr.response);
			}
			// if error
			// 404 -> page not found
			// so if we wrong write the address page we show error message / run function error()
			else if (xhr.status === 404) {
				error();
			}
		}
	};
	// run the ajax
	// open need some param
	// the first is we want that what the method
	// and the where the url, the url matches the params that will be sent later
	xhr.open("get", url);
	xhr.send();
} */

// this new function for success and error
// function success(){

// }
// function error(){

// }

// call the function
// getDataMahasiswa('mahasiswa.json', success, error); // if we write like this, the we'll need new function
// or we can use anonymous function / arrow funct
// so for the success that have param respone,so we can assume that we give that data is result
// getDataMahasiswa(
// 	"data/mahasiswa.json",
// 	(results) => {
// 		// console.log(results);
// 		// result is still in text form
// 		// we need to show it in object form
// 		// so we should parsing the result
// 		// console.log(JSON.parse(results));

// 		// we want to showing it just the name
// 		const mhs = JSON.parse(results);
// 		[...mhs].forEach((m) => console.log(m.nama));
// 	},
// 	() => {}
// );

// so what is the difference between the previous?, and now?
// now is asyncronous
// it will execute of script that just pass call stack
/* console.log("MULAI");
getDataMahasiswa(
	"data/mahasiswa.json",
	(results) => {
		const mhs = JSON.parse(results);
		mhs.forEach((m) => console.log(m.nama));
	},
	() => {}
);
console.log("SELESAI"); */

// right now js will know funct geDataMahasiswa is asyncronous
// then it will pass/ store in the web api the get into even loop and soon.
// so right now we can run script the under getmahasiswa [ console.log(selesai)]

//================================================
/// rather than we using vanilla js we can also the more simple way, we can use helper from JQuery
console.log("MULAI");
$.ajax({
	url: "data/mahasiswa.json",
	// if success, it will accept the params the result. and the result/ the return already in form of JSON/object.
	success: (mhs) => {
		mhs.forEach((m) => console.log(m.nama));
	},
	error: (e) => {
		console.log(e.responseText);
	},
});
console.log("SELESAI");
