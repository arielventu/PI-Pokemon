import {GET_POKEMONS, WALL_PAGE_LOADED} from '../actions';

const initialState = {
	pokemons: [],
	types: [],
	selectedType: '',
	filtereredPokemons: [],
	wallpapers: [],
};

const rootReducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case WALL_PAGE_LOADED:
			return {
				...state,
				wallpapers: payload,
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