// fetch movie list from url
 const fetchMovies = async () => {
    const url="https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {

        method: 'GET',
	headers: {
		'x-rapidapi-key': 'c82fa76972msh7a86a53fc73dfafp12496fjsneaa8434637d9',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

//    add result to DOM

const movieList = document.getElementById("movie-list");
result.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
    `;
    movieList.appendChild(movieItem);
});
    

	console.log(result);
} catch (error) {
	console.error(error);
}
     
 }
 
 fetchMovies();