import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  // FETCH_SEARCHED,
  // CLEAR_SEARCHED,
} from '../constants/gamesConstants';

const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  // searched: [],
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
    // case FETCH_SEARCHED:
    //   return {
    //     ...state,
    //     searched: action.payload.searched,
    //   };
    // case CLEAR_SEARCHED:
    //   return {
    //     ...state,
    //     searched: [],
    //   };
    default:
      return { ...state };
  }
};

export default gamesReducer;
