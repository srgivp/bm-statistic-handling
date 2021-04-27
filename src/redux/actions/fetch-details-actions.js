import {
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_ERROR,
  FETCH_DETAILS_SUCCESS,
  CHANGE_FROM,
  CHANGE_TO,
  SET_NAME,
} from './action-types';
import { actionSamplePayload } from './action-samples';

export const fetchDetailsSuccess = actionSamplePayload(FETCH_DETAILS_SUCCESS);
export const fetchDetailsError = actionSamplePayload(FETCH_DETAILS_ERROR);
export const fetchDetailsRequest = payload => async dispatch => {
  dispatch({ type: FETCH_DETAILS_REQUEST });
  const { id, page, from, to } = payload;
  try {
    let response = await fetch(`/users/${page}/user/${id}?from=${from}&to=${to}`);
    if (response.ok) {
      response = await response.json();
      response.from = from;
      response.to = to;
      dispatch(fetchDetailsSuccess(response));
    } else {
      const error = await response.json();
      if (!error.message) {
        error.message = 'Internal server error';
      }
      dispatch(fetchDetailsError({ error }));
    }
  } catch (err) {
    const { message, stack } = err;
    const error = { message, stack };
    dispatch(fetchDetailsError({ error }));
  }
};

export const changeFrom = actionSamplePayload(CHANGE_FROM);
export const changeTo = actionSamplePayload(CHANGE_TO);
export const setName = actionSamplePayload(SET_NAME);
