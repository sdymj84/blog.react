const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log("Signed in")
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      console.log(action.error)
      return {
        ...state,
        authError: "Log in failed"
      }
    case 'LOGOUT_SUCCESS':
      console.log("Signed out")
      return state
    default:
      return state
  }
}

export default authReducer