import axios from 'axios';
import ALL_POKES from '../utils';

export const GET_POKEMONS = 'GET_POKEMONS';

// export const getPokemons = () => async (dispatch) => {
// 	try {
// 		const res = await axios.get(ALL_POKES);
// 		dispatch({type: 'GET_POKEMONS', payload: res.data});
// 	} catch (err) {
// 		console.log(err);
// 	}
// };


export const getPokemons = () => {
    return async dispatch => {
      try {
        
          const response = await fetch(ALL_POKES);
          const pokemons1 = await response.json();
          dispatch({type: GET_POKEMONS, payload: pokemons1});
        
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