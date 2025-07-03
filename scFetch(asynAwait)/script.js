/**
 * Refactoring untuk membuat lebih mudah di baca codenya
 * dengan konsep baru yaitu async await
 * async await adalah kewyord/ kosep di js untuk membuat code kita yang asynchronous menjadi terlihat seperti code synchronous
 */
const searchForm = document.querySelector("#searchForm");
const inputSearch = document.querySelector(".inputSearch");
const alertContainer = document.querySelector(".alertContainer");
const cardContainer = document.querySelector(".card-container");
const modalBody = document.querySelector(".modal-detail");
const spinnerCard = document.querySelector(".mySpinner");
const spinnerDetail = document.querySelector(".mySpinner-detail");

// ketika search di submit(diklik, dienter)
searchForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	placeholderLoad();

	// ambil keyword
	const keyword = inputSearch.value.trim();
	if (keyword) {
		alertContainer.innerHTML = ""; // reset alert
		spinnerCard.classList.remove("d-none");

		//// Variable movies yang isinya mengambil data menggunakan fetch ke API omdb
		/// jd di dalam variable movies ini ada function(getMovies()) yang ngambil film sesuai input yang dituliskan user(keyword)
		/// jd var movies berisi 10 film
		const movies = await getMovies(keyword);

		//// Jika sudah dapat data terdapat function(updateUI()) yang meminta param movies. yang dimana func ini adalah func untuk kita melakukan looping thdp cards, menumpuk cardnya lalu simpan kekontainer
		updateUI(movies);

		/// Dengan penulisan seperti ini :
		/// const movies = getMovies(keyword); // dan jika hanya seperti ini yg di return itu adalah promise bukan object, padahal didalam func getMovies(keyword) sudah menggunakan then. harusnya ketika dipanggil yaitu code ini dia sudah menjadi object. kenapa tidak jd object?
		/// updateUI(movies);
		/// kita dapat membuat code kita lebih modular dan mudah dibaca.
		//-> kenapa tdk jd object?, dikarenakan ketika kita berusaha membuat code kita semakin modular menggunkan cara diatas,yg perlu kita pahami adalah cara tsb adalah cara yg synchronous. yaitu jalankan func masukkan var, itu synchronous.jd ketika getMovies() dijalankan, dia langsung jalan. ketika pertama kali getMovies() dijalankan karna dia promise, maka dia pending. setelah data balik harusnya ini resolve tapi keburu kita tampilkan ke console.log()/ updateUI(). jd jika dilihat dr eventloop console.log(movies) keburu di tampilkan, dan getMovies() kelewat. itu dikarenakan codingan kita ini adalah codingan synchronous. JSnya gk tau kalo getMovies() adlah sebuah func yang asynchronous.nah disinilah kita bisa memanfaatkan keyword yang namanya [async await].
		// jd caranya kita kasih tau dulu keJSnya bahwa func yang dijalankan di event submit (func callback) itu didalamnya bakalan ada sesuatu yang asynchronous. karena kalau kita tdk kasih tau JS nya nganggap pasti synchronous semua. walaupun di getMovies ada fetch yang asynchronous.
		// nah cara ngasih taunya tinggal didepan keyword functionnya kita tuliskan async. jd kita kasi tau ke JSnya. Js, siap2 nih didalam function ini akan ada sesuatu yang asynchronous. JS : oke!. tinggal kita kasih tau yang mana yang bakalan asynchronousnya. nah kita tau itu getMovies(keyword). kita tinggal kasih di depanya keyword await. jd kalau ketemu getMovies(keyword) dia akan asynchronous. ngereturn promise. berarti jgn langsung diAssign ke var movies. tp tunggu dulu sampai promisenya resolve. kalau udh baru assign ke var movies. baru bisa ditampilkan ke console.log(movies)
	} else {
		alertContainer.innerHTML = alertContain("Keywordnya Kosong!🙂‍↔️");
	}
});

/// tahap ke II : detail ditampilkan ketika diklik
/// kita butat jd modular, dimana tahap ini sebelumnya digabung dengan fetch pertama
/// namun kita buat jd independen/terpisah agar tdk mengganggu 2 func(geMovies(), UpdateUI).
/// Caranya: ketika btn detail diklik, sayangnya kita tidak bisa langsung sama dgn sblmnya yang dimana kita querySelector all dan langsung kita pasangkan dengan Eventlistener. karena baris tsb [const btnDetails = document.querySelectorAll(".btnDetail");] langsung dijalankan ketika jsnya dieksekusi pertama kali.
// jd kita jalanin halamannya, saat tsb baris tersebut sudah dieksekusi, dan ketika baris tsb dieksekusi, ketika js disuruh untuk mencari elemen dgn class .btnDetail itu tidak ada. karena masih kosong kontennya(kita belum mensearch film / melakukan fetch yang pertama/ data atau konten belum dimunculkan).
/// jd ketika menambahkan eventListener ke querySelector yang kita pilih itu tidak bisa. dikarenakan eventlistenernya sudah jalan ketika tombol btnDetailnya belum ada. Sehingga cara ini tdk bisa di terapkan
/// ===
///  cara yang bisa kita terapkan bisa menggunakan trik yang namanya Event Binding
// jd kita ngasih event ke element yang awalnya belum ada tp ketika ada eventnya bisa tetap jalan.
// caranya kita simpan eventhandlernya ke document.
// jd nanti kita akan ceck apapun yang kita klik. jd kita bisa klik dimana saja termasuk modal detail btn/ .btnDetail.
document.addEventListener("click", async function (e) {
	// kalo kita console.log(e) itu akan menampilkan kordinat dari apapun yang kita klik. jadi kalo di klik dimanapun js akan mengenali apa yang kita klik.
	// tapi kalo kita tambahkan di console.log(e.target). itu akan menampilkan apapun yang kita klik elemennya. (yang diambil elemenya)
	/// jika elemen yang kita klik itu adalah elemen yang nama kelasnya .btnDetail, lakukan sesuatu.
	if (e.target.classList.contains("btnDetail")) {
		//show loading
		spinnerDetail.classList.remove("d-none");
		// reset detail
		modalBody.innerHTML = "";
		modalBody.classList.add("d-none");

		/// ambil imdbIDnya dengan cara yang mirip tp dengan perubahan e.target
		const imdID = e.target.dataset.imdbid;
		//get detail
		const movDetail = await getMovieDetails(imdID);
		//show detail
		updateUIDetail(movDetail);
	}
});

function placeholderLoad() {
	let movCard = "";
	for (let i = 0; i < 10; i++) {
		movCard += cardPlace();
	}
	cardContainer.innerHTML = movCard;
}

function getMovieDetails(imdbid) {
	return fetch("http://www.omdbapi.com/?apikey=6cc5343f&i=" + imdbid)
		.finally(() => {
			spinnerDetail.classList.add("d-none");
		})
		.then((response) => response.json())
		.then((response) => response)
		.catch((err) => {
			alertContainer.innerHTML = alertContain(err.statusText);
			modalBody.classList.remove("d-none");
		});
}

function updateUIDetail(movDetail) {
	const movieDetail = detailMovies(movDetail);
	modalBody.innerHTML = movieDetail;
	modalBody.classList.remove("d-none");
}

function getMovies(keyword) {
	return fetch("http://www.omdbapi.com/?apikey=6cc5343f&s=" + keyword)
		.then((response) => response.json())
		.then((response) => response.Search)
		.catch((err) => {
			alertContainer.innerHTML = alertContain(err.statusText);
		})
		.finally(() => {
			spinnerCard.classList.add("d-none");
		});
}

function updateUI(movies) {
	let movieCard = "";

	if (!movies) {
		alertContainer.innerHTML = alertContain("Keywordmu mungkin Salah🤔");
		return;
	} else {
		alertContainer.innerHTML = "";
	}

	movies.forEach((m) => {
		movieCard += cardMovies(m);
	});

	cardContainer.innerHTML = movieCard;
}

function cardMovies(m) {
	return `
  <div class="col-md-3 my-3">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top myImg" alt="..${m.Title}" />
      <div class="card-body">
        <h5 class="card-title text-truncate">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary btnDetail" data-bs-toggle="modal" data-bs-target="#modalMovie" data-imdbid=${m.imdbID} >Show details</a>
      </div>
    </div>
  </div>
`;
}

function detailMovies(mvDetails) {
	return `
  <div class="container-fluid">
      <div class="row ">
        <div class="col-md-5 d-flex justify-content-center">
          <img src="${mvDetails.Poster}" class="img-fluid" alt="${mvDetails.Title}" />
        </div>
        <div class="col-md">
          <ul class="list-group">
            <li class="list-group-item"><strong>Title : </strong>${mvDetails.Title}</li>
            <li class="list-group-item"><strong>Genre : </strong>${mvDetails.Genre}</li>
            <li class="list-group-item"><strong>Writer : </strong>${mvDetails.Writer}</li>
            <li class="list-group-item"
              ><strong>Plot : </strong><br />${mvDetails.Plot}</li
            >
            <li class="list-group-item"><strong>Rating: </strong>🌟${mvDetails.imdbRating}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function alertContain(a) {
	return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${a}</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}

function cardPlace() {
	return `
  <div class="col-md-3 my-3">
					<div class="card" aria-hidden="true">
						<svg aria-label="Placeholder" class="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#868e96"></rect>
						</svg>
						<div class="card-body">
							<h5 class="card-title placeholder-glow">
								<span class="placeholder col-6"></span>
							</h5>
							<p class="card-text placeholder-glow">
								<span class="placeholder col-7"></span>
								<span class="placeholder col-4"></span>
								<span class="placeholder col-4"></span>
								<span class="placeholder col-6"></span>
								<span class="placeholder col-8"></span>
							</p>
							<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
						</div>
					</div>
				</div>
  `;
}

function imgPlace() {
	return `<svg aria-label="Placeholder" class="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#868e96"></rect>
</svg>`;
}
