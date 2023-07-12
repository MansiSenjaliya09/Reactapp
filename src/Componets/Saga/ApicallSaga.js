
import { call,put,takeLatest } from "redux-saga/effects";
import Fechsagaapi from "../Apicall/Fechsagaapi";
function* handlegetuser(){
    try{
        const  users = yield call(Fechsagaapi);

        console.log(users)
        yield put({type:"User_Success",payload:users});
    }catch(err){
        yield put({type:"User_Fail",payload:err});
    }
}

function* wathcherUsersaga(){
    yield takeLatest("User_Req",handlegetuser);
}

export default wathcherUsersaga;