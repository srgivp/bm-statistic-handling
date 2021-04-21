import {
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS_SUCCESS,
    CHANGE_FROM,
    CHANGE_TO
} from "../actions/action-types";
import {correctStatisticBuilder} from "./utils";

export const initialDetailsState = {loading: false, error: null, data: null, from: null, to: null, correctedData: null};

export const detailsReducer = (state=initialDetailsState, action) => {
    switch (action.type) {
        case FETCH_DETAILS_REQUEST: {
            return {...state, loading: true, error: null};
        }
        case FETCH_DETAILS_ERROR: {
            return  {...state, loading: false, error: action.payload};
        }
        case FETCH_DETAILS_SUCCESS: {
            const {data, from, to} = action.payload;
            const correctedData = correctStatisticBuilder(data, from, to);
            return {...state, loading: false, error: false, data, from, to, correctedData};
        }
        case CHANGE_FROM: {
            const {from} = action.payload;
            return {...state, from}
        }
        case CHANGE_TO: {
            const {to} = action.payload;
            return {...state, to}
        }
        default: {
            return state;
        }
    }
}