import axios from 'axios'

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';
export const REQUEST_MADE = 'users:requestMade';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'ERROR'
        }
    }
}

export function requestMade() {
    return {
        type: REQUEST_MADE,
        payload: {
            user: 'Fetching...'
        }
    }
}

export function apiRequest() {
    return dispatch => {
        dispatch(requestMade())
        axios.get('https://www.google.com')
            .then((response) => {
                console.log('SUCCESS')
                console.log(response)

                // e.g
                // dispatch(updateUser(response.userName))
            })
            .catch((error) => {
                console.log('ERROR')
                console.log(error)
                dispatch(showError())
            })
    }
}