import axios from 'axios'
import { returnErrors } from './messages'
import { USERLOADED, USER_LOADING, AUTH_ERROR, USER_LOADED } from './types'


// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING })

    // Get token from state
    const token = getState().auth.token

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('/api/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(
            err.response.data,
            err.response.status
            ))
        dispatch({
            type: AUTH_ERROR
        })
    })
}