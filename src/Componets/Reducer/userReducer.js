const initialState = {

    data: [],
    loading: false,
    error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "STARTED":
    return {     ...state,
        loading: true }

  case "SUCCESS":

  const { data } = payload;
      return {
        ...state,
        data,
        loading: false
      }

      case "FAILURE":
        const { error } = payload;
        return {
          ...state,
          error,
          loading: false
        } 


      

  default:
    return state
  }
}