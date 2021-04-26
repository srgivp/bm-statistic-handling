import {FETCH_USERS_REQUEST, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from "../actions/action-types";

export const initialUsersState = {loading: false, error: null, data: [], total: null, minDate: null, maxDate: null};

export const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: {
            return {...state, loading: true, error: null};
        }
        case FETCH_USERS_ERROR: {
            return {...state, loading: false, error: action.payload.error};
        }
        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload.data,
                total: action.payload.total,
                minDate: action.payload.minDate,
                maxDate: action.payload.maxDate
            }
        }
        default: {
            return state;
        }
    }
}