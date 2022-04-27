import axios from 'axios';
import { ALL_POKES, ALL_TYPES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const SORT = 'SORT';
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

export const sort = (payload) => {
    // console.log(payload);
    return {
        type: 'SORT',
        payload,
    };
}
    
    

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





