import {
  GET_DETAIL,
  LOADING_DETAIL,
  FETCH_DETAILS_FAIL,
} from '../constants/gamesConstants';

const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case LOADING_DETAIL:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return { ...state };
  }
};

export default detailReducer;
