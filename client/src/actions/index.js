require('dotenv').config();
import axios from 'axios';
// import URL from '../utils';
const { PPP } = process.env;


export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => {
    return function (dispatch) {
        console.log(`${URL}/pokemons/`);
        axios.get(`${PPP}/pokemons/`)
            .then(response => {
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


