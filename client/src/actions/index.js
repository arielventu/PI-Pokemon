import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => async (dispatch) => {
    try {
        const res = await axios.get(POKEMONS);
        dispatch({ type: 'GET_POKEMONS', payload: res.data });
    } catch (err) {
        console.log(err);
    }
};
