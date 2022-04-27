import {
	GET_POKEMONS,
	GET_TYPES,
	FILTER_BY_ORIGIN,
	FILTER_BY_TYPE,
	// SEARCH_POKEMONS,
	// ORIGIN_POKEMONS,
	// SET_POKEMONS_TO_SHOW,
} from '../actions';

const initialState = {
	pokemons: [],
	types: [],
	allPokemons: [],
	// pokemonsOrigin: 'All',
	// typeFiltered: 'All',
};

function rootReducer (state = initialState, {payload, type}) {
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
			let allPokemons = state.allPokemons;
			let originFiltered;

			if (payload === 'All') originFiltered = allPokemons;
			if (payload === 'PokeAPI') originFiltered = allPokemons.filter((el) => typeof el.id === 'number');
			if (payload === 'Created') originFiltered = allPokemons.filter((el) => el.id.toString().length > 30);
			return {
				...state,
				pokemons: originFiltered,
			};
		case FILTER_BY_TYPE:
			let allPokes = state.allPokemons;
			let typeFiltered;

			if (payload === 'All') typeFiltered = allPokemons;
			if (payload !== 'All')
				typeFiltered = allPokes.filter((el) => el.type.includes(payload));
			return {
				...state,
				pokemons: typeFiltered,
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