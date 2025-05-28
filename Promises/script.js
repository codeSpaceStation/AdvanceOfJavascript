//// Review
/// request API
// $.ajax({
// 	url: "http://www.omdbapi.com/?i=tt3896198&apikey=6cc5343f&s=avengers",
// 	success: (movies) => console.log(movies),
// 	error: (e) => console.log(e.responseText),
// }); // this relies on jquery

/// if we just want to use ajax from vanilla js
// it is like this
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
// 	if (xhr.status === 200) {
// 		if (xhr.readyState === 4) {
// 			console.log(JSON.parse(xhr.response));
// 		}
// 	} else {
// 		console.log(xhr.response);
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
