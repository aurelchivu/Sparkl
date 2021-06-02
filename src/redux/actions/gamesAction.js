import axios from 'axios';
import {
  FETCH_GAMES,
  // FETCH_SEARCHED,
  // CLEAR_SEARCHED,
} from '../constants/gamesConstants';

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  // searchGameURL,
} from '../../api';

//Action Creator
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
