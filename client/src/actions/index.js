import axios from 'axios';
import { ALL_POKES, ALL_TYPES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const SORT_BY = 'SORT_BY';
export const CREATE_POKEMON = 'CREATE_POKEMON';
// export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';

export const getPokemons = () => {
    return function (dispatch) {
        axios.get(ALL_POKES)
        .then(response => {
                console.log(response.data);
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

export const getTypes = () => {
    return function (dispatch) {
        axios.get(ALL_TYPES)
        .then(response => {
            // console.log(response);
            dispatch({
                type: GET_TYPES,
                payload: response.data,
            });
        })
        .catch(error => {
            console.log(error);
        });
    };
};

export const filterByOrigin = (payload) => {
    // console.log(payload);
    return {
        type: 'FILTER_BY_ORIGIN',
        payload,
    };
}

export const filterByType = (payload) => {
    // console.log(payload);
    return {
        type: 'FILTER_BY_TYPE',
        payload,
    };
}

export const sortBy = (payload) => {
    // console.log(payload);
    return {
        type: 'SORT_BY',
        payload,
    };
}

export const createPokemon = (payload) => {
    return function (dispatch) {
        axios.post(ALL_POKES, payload)
            .then(response => {
                // console.log(response.data);  
                dispatch({
                    type: CREATE_POKEMON,
                    payload: response.data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

// export const searchPokemons = (search) => {
//     return function (dispatch) {
//         axios.get(`${ALL_POKES}?name=${search}`)
//         .then(response => {
//                 // console.log(response);
//                 dispatch({
//                     type: SEARCH_POKEMONS,
//                     payload: response.data
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };
// }





