import { combineReducers } from 'redux'
import leads from './leads'
import errors from './errors'
import messages from './messages'
import auth from './auth'


export default combineReducers({
    // all the lines is obtain the same result with different syntax
    leads: leads,
    errors,
    messages,
    auth
})