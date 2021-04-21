import {
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS_SUCCESS,
    CHANGE_FROM,
    CHANGE_TO
} from "./action-types";
import {actionSamplePayload} from "./action-samples";

export const fetchDetailsSuccess = actionSamplePayload(FETCH_DETAILS_SUCCESS);
export const fetchDetailsError = actionSamplePayload(FETCH_DETAILS_ERROR);
export const fetchDetailsRequest = (payload) => async (dispatch) => {
    dispatch({type: FETCH_DETAILS_REQUEST});
    const {id, page, from, to} = payload;
    try {
        let response = await fetch(`http://localhost:8080/users/${page}/${id}?from=${from}&to=${to}`);
        if (response.ok) {
            response = await response.json();
            console.log('response: ', response);
            response.from = from;
            response.to = to;
            dispatch(fetchDetailsSuccess(response));
        } else {
            response = response.json();
            dispatch(fetchDetailsError(response.error));
        }
    } catch (err) {
        dispatch(fetchDetailsError(err))
    }

}

export const changeFrom = actionSamplePayload(CHANGE_FROM);
export const changeTo = actionSamplePayload(CHANGE_TO);
