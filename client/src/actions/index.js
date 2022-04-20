import axios from 'axios';
import { ALL_POKES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const WALL_PAGE_LOADED = 'WALL_PAGE_LOADED';

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

export const wallPageLoaded = (wallpapers) => {
    return {
        type: WALL_PAGE_LOADED,
        payload: wallpapers,
    };
}


