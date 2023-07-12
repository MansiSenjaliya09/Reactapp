import { createStore } from "redux";
import rootReducer from "../Reducer/combinereducer";

const store2 = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

export default store2;