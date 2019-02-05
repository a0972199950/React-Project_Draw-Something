import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playersReducer from "../reducers/players";
import questionsReducer from "../reducers/questions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(combineReducers({
        players: playersReducer,
        questions: questionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );    
};