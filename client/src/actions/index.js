import axios from 'axios';
import ALL_POKES from '../utils';

export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = (pokemon) => {
    return async dispatch => {
      try {
        if (!pokemon.length) {
          const response = await fetch(ALL_POKES);
          const pokemons = await response.json();
          dispatch({type: GET_POKEMONS, payload: pokemons});
        }
        dispatch({type: GET_POKEMONS, payload: pokemon});
      } catch (err) {
        if (err.response) {
          const {response} = err;
          console.log(response.data);
          console.log(response.status);
          console.log(response.headers);
        }
        console.log(err);
        dispatch({type: GET_POKEMONS, payload: []});
      }
    };
  };


