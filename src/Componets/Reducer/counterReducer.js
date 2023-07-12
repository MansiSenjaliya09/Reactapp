const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'IN':
    return state+1;


    case 'DE':
        return state-1;

  default:
    return state
  }
}