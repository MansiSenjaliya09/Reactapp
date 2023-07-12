import { put, takeEvery, delay, takeLatest } from 'redux-saga/effects'

function Increment()
{
    return {
        type: 'IN',
        
      }
}

export function* incrementAsync() {
    yield delay(1000)
    yield put(Increment())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchIncrementAsync() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync)
  }