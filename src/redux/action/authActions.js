import {
  AUTH_CLEAR_ERROR,
  AUTH_RESPONSE,
  AUTH_SET_ERROR,
  AUTH_REQUEST,
  AUTH_SET_USER,
  AUTH_LOGOUT
} from './types'

import { apiBaseURL } from "../../utils/constant";
import axios from 'axios';
import Swal from 'sweetalert2';
import setAuthToken from '../../utils/setAuthToken';

// login user
export const loginUser = (user, history) => dispatch => {
  dispatch(authRequest());
  dispatch(clearErrors());
  axios.post(
    `${apiBaseURL}/api/user/login`,
    user,
  ).then(res => {
    dispatch(authResponse())

    dispatch(setUser(res.data.user));

    // set jwt token in localstorage
    localStorage.setItem("jwtToken", res.data.token)
    localStorage.setItem("user", JSON.stringify(res.data.user))

    // set  token into axios HTTP header

    setAuthToken(res.data.token);

    // redireact user to admin page

    history.push("/my")

  }).catch(err => {
    dispatch(authResponse())
    dispatch(setError(err.response.data.error))
  })
  // history.push("/");
}


// register user
export const registeUser = (user, history) => dispatch => {
  dispatch(authRequest());
  dispatch(clearErrors());
  axios.post(
    `${apiBaseURL}/api/user/register`,
    user,
  ).then(res => {
    dispatch(authResponse())
    Swal.fire(
      'User Registration',
      res.data.message,
      'success'
    )
    history.push("/login");
  }).catch(err => {
    dispatch(authResponse())
    dispatch(setError(err.response.data.error))
  })
}

// logout user
export const logoutUser = (history) => dispatch => {
  // logout user
  dispatch(clearUser())

  // clear localstorage
  localStorage.clear()

  // remove HTTP Header auth token from axios
  setAuthToken(false)

  // redirect to home page
  history.push("/")
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