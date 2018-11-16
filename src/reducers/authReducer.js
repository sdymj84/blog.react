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
      console.log(action.error.message)
      return {
        ...state,
        authError: action.error.message
      }
    case 'LOGOUT_SUCCESS':
      console.log("Signed out")
      return state
    case 'SIGNUP_SUCCESS':
      console.log("Signed up")
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log(action.error.message)
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return {
        ...state,
        authError: null
      }
  }
}

export default authReducer