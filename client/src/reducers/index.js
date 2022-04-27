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
			const allPokemons = state.allPokemons;
			let originFiltered;

			if (payload === 'All') originFiltered = allPokemons;
			if (payload === 'PokeAPI') originFiltered = allPokemons.filter((el) => typeof el.id === 'number');
			if (payload === 'Created') originFiltered = allPokemons.filter((el) => el.id.toString().length > 30);
			// 	let reg_ex = /-/;
			// 	originFiltered = allPokemons.filter((el) => el.id.toString().search(reg_ex) !== -1);
			// }
			return {
				...state,
				pokemons: originFiltered,
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