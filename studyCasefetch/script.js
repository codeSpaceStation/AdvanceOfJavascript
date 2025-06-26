const searchForm = document.querySelector("#searchForm");
const inputSearch = document.querySelector(".inputSearch");
const alertContainer = document.querySelector(".alertContainer");
const cardContainer = document.querySelector(".card-container");
const modalDetail = document.querySelector(".modal-detail");
const spinnerCard = document.querySelector(".mySpinner");
const spinnerDetail = document.querySelector(".mySpinner-detail");

searchForm.addEventListener("submit", function (e) {
	e.preventDefault();

	let movCard = "";
	for (let i = 0; i < 10; i++) {
		movCard += cardPlace();
	}
	cardContainer.innerHTML = movCard;

	const keyword = inputSearch.value.trim();
	if (keyword) {
		alertContainer.innerHTML = ""; // reset alert
		spinnerCard.classList.remove("d-none");

		fetch("http://www.omdbapi.com/?apikey=6cc5343f&s=" + keyword)
			.then((response) => response.json())
			.then((response) => {
				const movies = response.Search;

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

				const btnDetails = document.querySelectorAll(".btnDetail");

				btnDetails.forEach((btnDetail) => {
					btnDetail.addEventListener("click", function () {
						spinnerDetail.classList.remove("d-none");
						modalDetail.innerHTML = "";
						modalDetail.classList.add("d-none");

						fetch("http://www.omdbapi.com/?apikey=6cc5343f&i=" + this.dataset.imdbid)
							.finally(() => {
								spinnerDetail.classList.add("d-none");
							})
							.then((response) => response.json())
							.then((response) => {
								const movieDetail = detailMovies(response);

								modalDetail.innerHTML = movieDetail;
								modalDetail.classList.remove("d-none");
							})
							.catch((err) => {
								alertContainer.innerHTML = alertContain(err.statusText);
								modalDetail.classList.remove("d-none");
							});
					});
				});

				// ketika btn modal diklik
			})
			.catch((err) => {
				alertContainer.innerHTML = alertContain(err.statusText);
			})
			.finally(() => {
				spinnerCard.classList.add("d-none");
			});
	} else {
		alertContainer.innerHTML = alertContain("Keywordnya Kosong!🙂‍↔️");
	}
});

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
