import axios from 'axios';
import { ALL_POKES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';

export const getPokemons = () => {
    return function (dispatch) {
        axios.get(ALL_POKES)
        .then(response => {
                console.log(response);
                dispatch({
                    type: GET_POKEMONS,
                    payload: response.data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const searchPokemons = (search) => {
    return function (dispatch) {
        axios.get(`${ALL_POKES}?name=${search}`)
        .then(response => {
                console.log(response);
                dispatch({
                    type: SEARCH_POKEMONS,
                    payload: response.data.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())),
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
}


