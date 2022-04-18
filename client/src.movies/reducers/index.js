import { GET_MOVIE_DETAIL, GET_MOVIES, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions"; 

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    
    let foundMovie = state.moviesFavourites.find((movie) => movie.imdbID === action.payload.imdbID)
    
    if (action.type === ADD_MOVIE_FAVORITE && !foundMovie) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter((movie) => movie.imdbID !== action.payload)
        };
    }
    if (action.type === GET_MOVIE_DETAIL) {
        return {
          ...state,
          movieDetail: action.payload
        };
    }
    return state;
  }

  
  
  export default rootReducer;