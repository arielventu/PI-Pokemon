import axios from 'axios';
import { ALL_POKES, ALL_TYPES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const ORIGIN_POKEMONS = 'ORIGIN_POKEMONS';
export const SET_POKEMONS_TO_SHOW = 'SET_POKEMONS_TO_SHOW';
export const FILTER_TYPES = 'FILTER_TYPES';

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

export const setPokemonsToShow = (pokemons) => {
    return function (dispatch) {
        dispatch({
            type: SET_POKEMONS_TO_SHOW,
            payload: pokemons,
        });
    };
}

export const filterTypes = (type) => {
    return function (dispatch) {
        try {
            dispatch({
                type: FILTER_TYPES,
                payload: type,
            });

        } catch (error) {
            console.log(error);
        }
    };
}



