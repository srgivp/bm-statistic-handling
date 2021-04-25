import {CLEAN_ERROR} from "../actions/action-types";

export const initialErrorState = {error: null};
export const errorReducer = (state = initialErrorState, action) => {
    if (action.payload && action.payload.error) {
        return {
            ...state,
            error: action.payload.error
        }
    } else if (action.type === CLEAN_ERROR) {
        return {error: null}
    } else {
        return state;
    }
}
