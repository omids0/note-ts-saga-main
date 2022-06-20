import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

const composeEnhancer = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
