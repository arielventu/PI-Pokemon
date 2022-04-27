import {
	GET_POKEMONS,
	GET_TYPES,
	FILTER_BY_ORIGIN,
	// SEARCH_POKEMONS,
	// ORIGIN_POKEMONS,
	// SET_POKEMONS_TO_SHOW,
	// FILTER_TYPES,
} from '../actions';

const initialState = {
	pokemons: [],
	types: [],
	pokemonsToShow: [],
	// pokemonsOrigin: 'All',
	// typeFiltered: 'All',
};

const rootReducer = (state = initialState, {payload, type}) => {
	switch (type) {
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
		case FILTER_BY_ORIGIN:
			const allPokemons = state.pokemons;
			const pokemonsOrigin = payload === 'All' ? allPokemons : allPokemons.filter(pokemon => pokemon.origin === payload);
			return {
				...state,
				pokemons: pokemonsOrigin,
			};
			// case SET_POKEMONS_TO_SHOW:
			// 	return {
			// 		...state,
			// 		pokemonsToShow: payload,
			// 	};
			// case ORIGIN_POKEMONS:
			// 	return {
			// 		...state,
			// 		pokemonsOrigin: payload,
			// 	};
			// case SEARCH_POKEMONS:
			// 	return { 
			// 		...state,
			// 		pokemons: payload,
			// 	};
			// case FILTER_TYPES:
			// 	return {
			// 		...state,
			// 		typeFiltered: payload,
			// 	};
			default:
				return state;
	}
};

export default rootReducer;