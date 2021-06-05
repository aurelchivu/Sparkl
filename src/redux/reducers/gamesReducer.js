import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
} from '../constants/gamesConstants';

const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
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
    case FETCH_GAMES_FAIL:
      return { error: action.payload };
    default:
      return { ...state };
  }
};

export default gamesReducer;
