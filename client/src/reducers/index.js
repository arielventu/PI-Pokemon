import {GET_POKEMONS, SEARCH_POKEMONS, GET_TYPES} from '../actions';

const initialState = {
	pokemons: [],
	types: [],
};

const rootReducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case SEARCH_POKEMONS:
			return { 
				...state,
				pokemons: payload,
			};
		case GET_POKEMONS:
			return {
				...state,
				pokemons: payload,
			};
		case GET_TYPES:
			return {
				...state,
				types: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;