import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(rootSaga)

export default store