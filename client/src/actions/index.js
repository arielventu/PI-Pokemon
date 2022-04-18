export const GET_POKEMONS = 'GET_POKEMONS';

export function getPokemons() {
    return function(dispatch) {
        return axios.get(`localhost:3001/pokemons`)
            
        .then(response => response.json())
        .then(jsonData => {
            dispatch({
                type: GET_MOVIES,
                payload: jsonData
            });
        });
    }
}