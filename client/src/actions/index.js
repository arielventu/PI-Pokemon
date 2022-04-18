export const GET_POKEMONS = 'GET_POKEMONS';

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