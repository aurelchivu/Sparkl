import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  LOADING_SEARCHED,
  FETCH_SEARCHED,
  CLEAR_SEARCHED,
} from '../constants/gamesConstants';

const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
  searchLoading: true,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case LOADING_SEARCHED:
      return {
        ...state,
        searchLoading: true,
      };
    case FETCH_SEARCHED:
      return {
        ...state,
        searched: action.payload.searched,
        searchLoading: false,
      };
    case CLEAR_SEARCHED:
      return {
        ...state,
        searched: [],
      };
    case FETCH_GAMES_FAIL:
      return { error: action.payload };
    default:
      return { ...state };
  }
};

export default gamesReducer;
