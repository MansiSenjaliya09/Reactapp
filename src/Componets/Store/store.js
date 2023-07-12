import { createStore,applyMiddleware } from "redux";
import rootReducer from "../Reducer/combinereducer";
import thunk from 'redux-thunk';
import rootSaga from '../Saga/rootSaga';

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  export default store;