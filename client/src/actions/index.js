import axios from 'axios';
import { ALL_POKES, ALL_TYPES } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const GET_TYPES = 'GET_TYPES';

export const getPokemons = () => {
    return function (dispatch) {
        axios.get(ALL_POKES)
        .then(response => {
                // console.log(response);
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

export const setPokemonsOrigin = (origin) => (dispatch) => {
	dispatch({type: 'POKEMONS_ORIGIN', payload: origin});
};

export const setPokemonsType = (type) => (dispatch) => {
	dispatch({type: 'POKEMONS_TYPE', payload: type});
};

