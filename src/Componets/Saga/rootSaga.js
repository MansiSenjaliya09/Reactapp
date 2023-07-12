import {  all,  } from 'redux-saga/effects';
import { watchIncrementAsync } from './counterSaga';
import wathcherUsersaga from './ApicallSaga';



export default function* rootSaga() {
  //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);

  yield all([watchIncrementAsync(),wathcherUsersaga()]);
  }