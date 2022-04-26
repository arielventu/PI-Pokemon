import {
	GET_POKEMONS,
	SEARCH_POKEMONS,
	GET_TYPES,
	ORIGIN_POKEMONS,
	SET_POKEMONS_TO_SHOW,
	FILTER_TYPES,
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
		case SET_POKEMONS_TO_SHOW:
			return {
				...state,
				pokemonsToShow: payload,
			};
		case ORIGIN_POKEMONS:
			return {
				...state,
				pokemonsOrigin: payload,
			};
		case FILTER_TYPES:
			return {
				...state,
				typeFiltered: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;