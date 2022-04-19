import axios from 'axios';
import ALL_POKES from '../utils';

export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => async (dispatch) => {
	try {
		const res = await axios.get(ALL_POKES);
		dispatch({type: 'GET_POKEMONS', payload: res.data});
	} catch (err) {
		console.log(err);
	}
};
