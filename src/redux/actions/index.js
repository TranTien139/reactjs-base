import {GET_LOGIN, GET_LOGOUT} from './actionTypes'

export const getLogin = (email, password) => {
    return {
        type: GET_LOGIN,
        email: email,
        password: password
    }
}


export const getLogout = () => {
    return {
        type: GET_LOGOUT,
        email: null,
        password: null
    }
}


