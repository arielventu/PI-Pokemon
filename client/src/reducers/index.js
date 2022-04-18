
const initialState = {
	pokemons: [],
};

const rootReducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case 'GET_POKEMONS':
			return {
				...state,
				pokemons: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;