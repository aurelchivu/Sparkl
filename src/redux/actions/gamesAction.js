import axios from 'axios';
import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  FETCH_SEARCHED,
} from '../constants/gamesConstants';

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from '../../utils/api';

export const loadGames = () => async (dispatch) => {
  try {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
      type: FETCH_GAMES_SUCCESS,
      payload: {
        popular: popularData.data.results,
        upcoming: upcomingData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FETCH_GAMES_FAIL,
      payload: message,
    });
  }
};

export const fetchSearch = (game_name) => async (dispatch) => {
  try {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
      type: FETCH_SEARCHED,
      payload: {
        searched: searchGames.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
