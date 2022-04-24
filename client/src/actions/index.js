import axios from 'axios';
import { ALL_POKES, ALL_TYPES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const ORIGIN_POKEMONS = 'ORIGIN_POKEMONS';

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


export const searchPokemons = (search) => {
    return function (dispatch) {
        axios.get(`${ALL_POKES}?name=${search}`)
        .then(response => {
                // console.log(response);
                dispatch({
                    type: SEARCH_POKEMONS,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export const originPokemons = (id) => {
    return function (dispatch) {
        dispatch({
            type: ORIGIN_POKEMONS,
            payload: {
                id: id,
                
            }
    });
}

}

