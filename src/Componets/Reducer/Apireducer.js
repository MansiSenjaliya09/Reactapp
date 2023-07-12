const initialState = {
    loding: false,
    error:{},
    data :[],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'User_Req':
    return { ...state,  loding: true, }
  case 'User_Success':
    return { ...state, data:payload,loding:false }
   case 'User_Fail':
    return { ...state,data:payload,loding:false }

  default:
    return state
  }
}
