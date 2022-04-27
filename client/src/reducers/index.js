import {
	GET_POKEMONS,
	GET_TYPES,
	FILTER_BY_ORIGIN,
	FILTER_BY_TYPE,
	SORT_BY,
	CREATE_POKEMON,
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
			const allPokesByOrigin = state.allPokemons;
			let originFiltered;

			if (payload === 'All') originFiltered = allPokesByOrigin;
			if (payload === 'PokeAPI') originFiltered = allPokesByOrigin.filter((el) => typeof el.id === 'number');
			if (payload === 'Created') originFiltered = allPokesByOrigin.filter((el) => el.id.toString().length > 30);
			return {
				...state,
				pokemons: originFiltered,
			};
		case FILTER_BY_TYPE:
			const allPokesByType = state.allPokemons;
			let typeFiltered;

			if (payload === 'All') typeFiltered = allPokesByType;
			if (payload !== 'All')
				typeFiltered = allPokesByType.filter((el) => el.type.includes(payload));
			return {
				...state,
				pokemons: typeFiltered,
			};
		case SORT_BY:
			const pokemonsSorted = state.pokemons;
			let orderBy;

			if (payload === 'A-Z') orderBy = pokemonsSorted.sort((a, b) => a.name > b.name ? 1 : -1);
			if (payload === 'Z-A') orderBy = pokemonsSorted.sort((a, b) => a.name < b.name ? 1 : -1);
			if (payload === 'Ʌ Attack') orderBy = pokemonsSorted.sort((a, b) => a.attack < b.attack ? 1 : -1);
			if (payload === 'V Attack') orderBy = pokemonsSorted.sort((a, b) => a.attack > b.attack ? 1 : -1);
			console.log(orderBy);
			return {
				...state,
				pokemons: orderBy,
			};
		case CREATE_POKEMON:
			return {
				...state,
				pokemons: [...state.pokemons, payload],
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