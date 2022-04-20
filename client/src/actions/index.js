import axios from 'axios';
import ALL_POKES from '../utils';

export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => {
    return function (dispatch) {
        console.log('http://localhost:3001/pokemons/');
        axios.get('http://localhost:3001/pokemons/')
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


