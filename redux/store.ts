import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();

const composeEnhancer = composeWithDevTools({});

const initialState = {}

const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
