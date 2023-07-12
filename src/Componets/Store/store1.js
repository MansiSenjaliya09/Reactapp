import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/counterSlice'
import postsReducer from '../Slice/postApiThunkdata';
 
 const rootReducer = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
    // any name to place counterReducer
  }
})
export default rootReducer;