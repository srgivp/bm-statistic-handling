import {combineReducers} from "redux";
import {usersReducer} from "./users-reducer";
import {detailsReducer} from "./details-reducer";
import {errorReducer} from "./error-reducer";

const rootReducer = combineReducers({
    users: usersReducer,
    details: detailsReducer,
    allErrorsHandler: errorReducer
})

export default rootReducer;