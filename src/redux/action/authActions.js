import {
    AUTH_CLEAR_ERROR,
    AUTH_RESPONSE,
    AUTH_SET_ERROR,
    AUTH_REQUEST,
    AUTH_SET_USER,
    AUTH_LOGOUT
  } from './types'


  // login user
export const loginUser = (user, history) => dispatch => {

}


// register user
export const registeUser = (user, history) => dispatch => {

}



// Set User
export const setUser = (user) => {
    return {
      type: AUTH_SET_USER,
      payload: user
    }
  }

  // clear User on logout
export const clearUser = () => {
    return {
      type: AUTH_LOGOUT
    }
  }
  
  
  // AJAX/Axios Request to server
  export const authRequest = () => {
    return {
      type: AUTH_REQUEST
    }
  }
  // AJAX/Axios Reponse from server
  export const authResponse = () => {
    return {
      type: AUTH_RESPONSE
    }
  }
  
  // Clear Error
  export const clearErrors = () => {
    return {
      type: AUTH_CLEAR_ERROR
    }
  }

  // Set Error
export const setError = (error) => {
    return {
      type: AUTH_SET_ERROR,
      payload: error
    }
  }