export const getUserListStarted = () => {
    return {
      type: "STARTED"
    }
  }

  export const getUserListSuccess = data => {
    return {
      type: "SUCCESS",
      payload: {
        data
      }
    }
  }
  

  export const getUserListFailure = error => {
    return {
      type: "FAILURE",
      payload: {
        error
      }
    }
}