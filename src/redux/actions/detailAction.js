import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../../api';
import {
  GET_DETAIL,
  FETCH_DETAILS_FAIL,
} from '../constants/gamesConstants';

export const loadDetail = (id) => async (dispatch) => {
  try {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));

    dispatch({
      type: GET_DETAIL,
      payload: {
        game: detailData.data,
        screen: screenShotData.data,
      },
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message);
    dispatch({
      type: FETCH_DETAILS_FAIL,
      payload: message,
    });
  }
};
