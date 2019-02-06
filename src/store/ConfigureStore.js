import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playersReducer from "../reducers/players";
import questionsReducer from "../reducers/questions";
import canvasReducer from "../reducers/canvas";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(combineReducers({
        players: playersReducer,
        questions: questionsReducer,
        canvas: canvasReducer,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );    
};