const cardCont = document.querySelector(".card-container");
let movCard = "";
for (let i = 0; i < 10; i++) {
	movCard += cardPlace();
}
cardCont.innerHTML = movCard;

$(".searchBtn").on("click", function () {
	$.ajax({
		url: "http://www.omdbapi.com/?apikey=6cc5343f&s=" + $(".inputSearch").val(),
		success: (results) => {
			const movies = results.Search;

			let movieCard = "";

			if (!movies) {
				$(".alertContainer").html(alertContain("Kamu belum mengisi kolom search atau keywordmu Salah"));
				return;
			}

			movies.forEach((m) => {
				movieCard += cardMovies(m);
			});

			$("div.card-container").html(movieCard);

			$(".btnDetail").on("click", function () {
				$.ajax({
					url: "http://www.omdbapi.com/?apikey=6cc5343f&i=" + $(this).attr("data"),
					success: (mvDetails) => {
						const movieDetail = detailMovies(mvDetails);

						$(".modal-detail").html(movieDetail);
					},
				});
			});
		},
		error: (e) => {
			$(".alertContainer").html(alertContain(e.statusText));
		},
	});
});

function cardMovies(m) {
	return `
  <div class="col-md-3 my-3">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top myImg" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-truncate">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary btnDetail" data-bs-toggle="modal" data-bs-target="#modalMovie" data=${m.imdbID} >Show details</a>
      </div>
    </div>
  </div>
`;
}

function detailMovies(mvDetails) {
	return `
  <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="${mvDetails.Poster}" class="img-fluid" alt="..." />
        </div>
        <div class="col-md">
          <ul class="list-group">
            <li class="list-group-item"><strong>Title : </strong>${mvDetails.Title}</li>
            <li class="list-group-item"><strong>Genre : </strong>${mvDetails.Genre}</li>
            <li class="list-group-item"><strong>Writer : </strong>${mvDetails.Writer}</li>
            <li class="list-group-item"
              ><strong>Plot : </strong><br />${mvDetails.Plot}</li
            >
            <li class="list-group-item"><strong>Rating: </strong>🌟${mvDetails.Ratings[0].Value}</li>
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
							<h5 class="card-title">
								<span class="placeholder col-6"></span>
							</h5>
							<p class="card-text">
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
