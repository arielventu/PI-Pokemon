import {
	GET_POKEMONS,
	GET_TYPES,
	FILTER_BY_ORIGIN,
	FILTER_BY_TYPE,
	SORT_BY_NAME,
	// SEARCH_POKEMONS,
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
			let allPokesByOrigin = state.allPokemons;
			let originFiltered;

			if (payload === 'All') originFiltered = allPokesByOrigin;
			if (payload === 'PokeAPI') originFiltered = allPokesByOrigin.filter((el) => typeof el.id === 'number');
			if (payload === 'Created') originFiltered = allPokesByOrigin.filter((el) => el.id.toString().length > 30);
			return {
				...state,
				pokemons: originFiltered,
			};
		case FILTER_BY_TYPE:
			let allPokesByType = state.allPokemons;
			let typeFiltered;

			if (payload === 'All') typeFiltered = allPokesByType;
			if (payload !== 'All')
				typeFiltered = allPokesByType.filter((el) => el.type.includes(payload));
			return {
				...state,
				pokemons: typeFiltered,
			};
		case SORT_BY_NAME:
			let pokemonsSorted = state.pokemons;
		
			if (payload === 'Desc') pokemonsSorted.sort((a, b) => a.name > b.name ? 1 : -1);
			if (payload === 'Asc') pokemonsSorted.sort((a, b) => b.name > a.name ? 1 : -1);
			return {
				...state,
				pokemons: pokemonsSorted,
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