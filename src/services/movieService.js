export const searchMovie = async (searchWord) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=7cc39c3&s=${searchWord}`);
    const movies = await response.json();
    return movies;
}




export const searchMovieByID = async (searchWord) => {
    console.log(searchWord)
    const response = await fetch(`http://www.omdbapi.com/?apikey=7cc39c3&i=${searchWord}`);
    const movies = await response.json();
    console.log(movies)
    return movies;
}

