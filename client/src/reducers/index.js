import {GET_POKEMONS} from '../actions';

const initialState = {
	pokemons: [],
	types: [],
	selectedType: '',
	filtereredPokemons: [],
};

const rootReducer = (state = initialState, {payload, type}) => {
	switch (type) {
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