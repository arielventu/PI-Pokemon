import {
	GET_POKEMONS,
	GET_TYPES,
	FILTER_BY_ORIGIN,
	FILTER_BY_TYPE,
	SORT_BY,
	CREATE_POKEMON,
	GET_POKEMON_DETAILS,
	CLEAR_POKEMON_DETAILS,
	GET_POKEMON_BY_NAME,
} from '../actions';

const initialState = {
	pokemons: [],
	allPokemons: [],
	types: [],
	detailPokemon: {},
	msg:''
};

function rootReducer (state = initialState, {payload, type}) {
	switch (type) {
		case GET_POKEMONS:
			pokemons.length ?
			{
				pokemons,
				allPokemons
			} : {
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
			if (originFiltered.length) {
				return {
					...state,
					pokemons: originFiltered,
					msg: ''
				}
			} else {
				return {
					...state,
					msg: 'There are no created pokemon yet'
				}
			};
		case FILTER_BY_TYPE:
			const allPokesByType = state.allPokemons;
			let typeFiltered;

			if (payload === 'All') typeFiltered = allPokesByType;
			if (payload !== 'All')
				typeFiltered = allPokesByType.filter((el) => el.type.includes(payload));
			// return {
			// 	...state,
			// 	pokemons: typeFiltered
			// };
			if (typeFiltered.length) {
				return {
					...state,
					pokemons: typeFiltered,
					msg: ''
				}
			} else {
				return {
					...state,
					msg: 'There are no loaded pokemon of the selected type'
				}
			};
		case SORT_BY:
			const pokemonsSorted = state.pokemons;
			let orderBy;

			if (payload === 'A-Z') orderBy = pokemonsSorted.sort((a, b) => a.name > b.name ? 1 : -1);
			if (payload === 'Z-A') orderBy = pokemonsSorted.sort((a, b) => a.name < b.name ? 1 : -1);
			if (payload === 'Ʌ Attack') orderBy = pokemonsSorted.sort((a, b) => a.attack < b.attack ? 1 : -1);
			if (payload === 'V Attack') orderBy = pokemonsSorted.sort((a, b) => a.attack > b.attack ? 1 : -1);
			if (payload === 'id') orderBy = pokemonsSorted.sort((a, b) => a.id - b.id);
			console.log(orderBy);
			return {
				...state,
				pokemons: orderBy,
			};
		case CREATE_POKEMON:
			return {
				...state,
				pokemons: [
					...state.pokemons,
					payload
				],
			};
		case GET_POKEMON_DETAILS:
			return {
				...state,
				detailPokemon: payload,
			};
		case CLEAR_POKEMON_DETAILS:
			return {
				...state,
				detailPokemon: {},
			};
		case GET_POKEMON_BY_NAME:
			return {
				...state,
				detailPokemon: payload,
			};
			default:
				return state;
	}
};


export default rootReducer;