
import { combineReducers } from 'redux';
import counterReducer from '../Reducer/counterReducer'
import productReducer from '../Reducer/productReducer';
import userReducer from './userReducer';
import Apireducer from './Apireducer';
import productAddcartreducer from './productAddcartreducer';

const rootReducer = combineReducers(
    {
    counter: counterReducer,
    products : productReducer,
    user: userReducer,
    person :Apireducer,
    addtocart :productAddcartreducer
    }
)

export default rootReducer;

