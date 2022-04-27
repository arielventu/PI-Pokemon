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
	allPokemons: [],
	// pokemonsOrigin: 'All',
	// typeFiltered: 'All',
};

const rootReducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case GET_POKEMONS:
			return {
				...state,
				pokemons: payload,
				allPokemons: payload,
			};
		case GET_TYPES:
			return {
				...state,
				types: payload,
			};
		case FILTER_BY_ORIGIN:
			const allPokes = state.pokemons;
			const getPokemonsOrigin = (payload) => {
				if (payload === 'All') return allPokes;
				if (payload === 'PokeAPI') return allPokes.filter((el) => typeof el.id === 'number');
				if (payload === 'Created') {
					let reg_ex = /-/;
					return allPokes.filter((el) => el.id.toString().search(reg_ex) !== -1);
				}
			}
			return {
				...state,
				pokemons: getPokemonsOrigin(payload),
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