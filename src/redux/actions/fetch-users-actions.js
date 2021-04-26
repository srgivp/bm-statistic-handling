import {FETCH_USERS_REQUEST, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from "./action-types";
import {actionSamplePayload} from "./action-samples";

export const fetchUsersSuccess = actionSamplePayload(FETCH_USERS_SUCCESS);
export const fetchUsersError = actionSamplePayload(FETCH_USERS_ERROR);
export const fetchUsersRequest = (payload) => async (dispatch) => {
    dispatch({type: FETCH_USERS_REQUEST});
    const {limit, page} = payload;
    try {
        let response = await fetch(`http://localhost:8080/users/${page}?limit=${limit}`);
        if (response.ok) {
            response = await response.json();
            dispatch(fetchUsersSuccess(response));
        } else {
            const error = await response.json();
            if (!error.message){
                error.message = 'Internal server error';
            }
            dispatch(fetchUsersError({error}))
        }
    } catch (err) {
        const {message, stack} = err;
        const error = {message, stack};
        dispatch(fetchUsersError({error: error}))
    }

}
