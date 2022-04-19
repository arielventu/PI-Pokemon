import axios from 'axios';
import ALL_POKES from '../utils';

export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => async (dispatch) => {
    try {
        console.log(ALL_POKES);
        const res = await axios.get('http://localhost:3001/pokemons');
        // console.log(res.data);
        dispatch({ type: 'GET_POKEMONS', payload: res.data });
    } catch (err) {
        console.log(err);
    }
};
