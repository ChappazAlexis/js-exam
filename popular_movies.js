// https://api.themoviedb.org/3/movie/popular?api_key=3f951fde1f94ff23e3aebbd24b292474&langua ge=fr-FR&page=1

let api_key = "3f951fde1f94ff23e3aebbd24b292474";
let endpoint = "https://api.themoviedb.org/3/movie/popular";

let url = endpoint +  `?api_key=${api_key}&language=fr-FR&page=1`;

let movieImg = document.querySelector(".movieImg");
let movieTitle = document.querySelector(".movieTitle");
let cardDiv = document.querySelector("#cardDiv");


fetch(url)
.then(res => {
    return res.json()
}).then(data => {
    console.log(data)
    for (movie of data.results) {
        let imgLink = "https://image.tmdb.org/t/p/w185"+movie.poster_path
        let moviePoster = document.createElement('img');
        moviePoster.setAttribute('src', imgLink);
        let titleLink = (movie.original_title)
        console.log(imgLink)
        console.log(titleLink);

        cardDiv.innerHTML += `<div class="card"><div id="cardImg"><img src=${imgLink}> <div id=cardTitle> <h2>${titleLink}</h2> </div> </div>`;
    }
})

