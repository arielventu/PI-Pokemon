import axios from 'axios';
import URL from '../utils';



export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => {
    return function (dispatch) {
        console.log(URL);
        axios.get(URL)
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


