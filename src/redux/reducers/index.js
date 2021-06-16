// import authReducer from './authReducer'
// import teamReducer from './teamReducer'
import  authReducers  from "./authReducers";
import { combineReducers } from 'redux'
import teamReducers from "./teamReducers";


export default combineReducers({
  auth: authReducers,
  teams: teamReducers
})