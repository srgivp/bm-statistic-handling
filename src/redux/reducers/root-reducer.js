import {combineReducers} from "redux";
import {usersReducer} from "./users-reducer";
import {detailsReducer} from "./details-reducer";

const rootReducer = combineReducers({
    users: usersReducer,
    details: detailsReducer
})

export default rootReducer;