export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

const apiKey = '253a6910';

export function getMovies(title) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        .then(response => response.json())
        .then(jsonData => {
            dispatch({
                type: GET_MOVIES,
                payload: jsonData
            });
        });
    }
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(jsonData => {
            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: jsonData
            });
        });
    };
}

export function addMovieFavorite(title) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: title
    };
}

export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    };
}
