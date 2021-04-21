import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducers/root-reducer";
import thunk from "redux-thunk";
import {initialDetailsState} from "./reducers/details-reducer";
import {initialUsersState} from "./reducers/users-reducer";
import {initialErrorState} from "./reducers/error-reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))

const initialState = {
    users: initialUsersState,
    details: initialDetailsState,
    allErrorsHandler: initialErrorState
};

const store = createStore(rootReducer, initialState, enhancer);

export default store;