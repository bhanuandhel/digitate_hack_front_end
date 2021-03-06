import {
  TEAM_CLEAR_ERROR,
  TEAM_RESPONSE,
  TEAM_SET_ERROR,
  TEAM_REQUEST
} from './types'

import { apiBaseURL } from "../../utils/constant";
import axios from 'axios';
import Swal from 'sweetalert2';

// create new team
export const createNewTeam = (team, history) => dispatch => {
  dispatch(teamRequest());
  dispatch(clearErrors());
  axios.post(
    `${apiBaseURL}/api/team/new`,
    team,
  ).then(res => {
    dispatch(teamResponse())
      Swal.fire(
        'New Team Register',
        res.data.message,
        'success'
      )
      history.push("/my")
  
  }).catch(err => {
    dispatch(teamResponse())
    dispatch(setError(err.response.data.error))
  })
  // history.push("/");
}


// AJAX/Axios Request to server
export const teamRequest = () => {
  return {
    type: TEAM_REQUEST
  }
}
// AJAX/Axios Reponse from server
export const teamResponse = () => {
  return {
    type: TEAM_RESPONSE
  }
}

// Clear Error
export const clearErrors = () => {
  return {
    type: TEAM_CLEAR_ERROR
  }
}

// Set Error
export const setError = (error) => {
  return {
    type: TEAM_SET_ERROR,
    payload: error
  }
}