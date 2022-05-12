import axios from 'axios';
import { ALL_POKES, ALL_TYPES, POKES_NAME } from '../utils.js';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const SORT_BY = 'SORT_BY';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const CLEAR_POKEMON_DETAILS = 'CLEAR_POKEMON_DETAILS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const DELETE_POKEMON = 'DELETE_POKEMON';

export const getPokemons = () => {
    return function (dispatch) {
        axios.get(ALL_POKES)
        .then(response => {
                // console.log(response.data);
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
                console.log(response.data);  
                if (response.data !== 'Name already exists in the database') {
                    dispatch({
                        type: CREATE_POKEMON,
                        payload: response.data,
                    });
                    // alert('Pokemon created successfully');
                } else {
                    // console.log(response.data);
                    alert(response.data);    
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const getPokemonDetails = (payload) => {
    return function (dispatch) {
        axios.get(`${ALL_POKES}${payload}`)
            .then(response => {
                // console.log(response.data, 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
                dispatch({
                    type: 'GET_POKEMON_DETAILS',
                    payload: response.data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const clearPokemonDetails = () => {
    return {
        type: 'CLEAR_POKEMON_DETAILS',
    };
}

export const getPokemonByName = (payload) => {
    return async function (dispatch) {
        // axios.get(`${POKES_NAME}${payload}`)
        //     .then(response => {
        //         // console.log(response.data);
        //         dispatch({
            //             type: 'GET_POKEMON_BY_NAME',
            //             payload: response.data,
            //         });
            //     })
            //     .catch(error => {
                //         console.log(error);
                //     });
                try {
                    await axios.get(`${POKES_NAME}${payload}`)
                    .then(response => {
                        // console.log(response.data);
                        dispatch({
                            type: 'GET_POKEMON_BY_NAME',
                            payload: response.data,
                        });
                });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deletePokemon = (payload) => {
    return function (dispatch) {
        axios.delete(`${ALL_POKES}delete/${payload}`)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: 'DELETE_POKEMON',
                    payload,
                });
            })
            .catch(error => {
                console.log(error);
            }
        );
    }
}







