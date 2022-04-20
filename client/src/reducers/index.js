import {GET_POKEMONS, SEARCH_POKEMONS} from '../actions';

const initialState = {
	pokemons: [],
	types: [],
	selectedType: '',
	filtereredPokemons: [],
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
		default:
			return state;
	}
};

export default rootReducer;