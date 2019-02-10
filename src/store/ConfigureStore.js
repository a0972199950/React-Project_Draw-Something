import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playersReducer from "../reducers/players";
import questionsReducer from "../reducers/questions";
import authReducer from "../reducers/auth";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(combineReducers({
        players: playersReducer,
        questions: questionsReducer,
        auth: authReducer
    }),
    // composeEnhancers(applyMiddleware(thunk))
    applyMiddleware(thunk)
    );    
};