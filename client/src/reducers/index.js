import {GET_POKEMONS, SEARCH_POKEMONS, GET_TYPES, ORIGIN_POKEMONS} from '../actions';

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
		case ORIGIN_POKEMONS:
			return {
				...state.pokemons.map(pokemon => {
					if (pokemon.id === payload.id) {
						pokemon.origin = payload.origin;
					}
					return pokemon;
				}),
				

			
				pokemons: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;