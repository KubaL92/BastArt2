import history from '../_helpers/history';
import { userActions } from '../_redux/user/duck';
import store from '../_redux/store'
import * as api from '../_helpers/api';
import jwt_decode from 'jwt-decode';

export const authService = {
    login,
    register,
    logout,
    loginByToken
};

async function login(accountData) {
    const response = await api.post('https://localhost:44334/api/authorization/login', accountData);
    sessionStorage.setItem('token', response.token);
    store.dispatch(userActions.addRole(response.role));
    store.dispatch(userActions.add(response.user));
    setTimeout(function(){ history.push('/') }, 500)
}

async function register(userData) {
    const response = await api.post('https://localhost:44334/api/authorization/register', userData);
    setTimeout(function(){ history.push('/login') }, 500)
}

function logout() {
    // remove user from local storage
    sessionStorage.removeItem('token');
    //redux
    store.dispatch(userActions.reset());
    store.dispatch(userActions.resetRole());
}

async function loginByToken(){
    const token = sessionStorage.token;

    const decodedData = jwt_decode(token);
    const user = {
        id: decodedData.Id,
        username: decodedData.Username,
        firstName: decodedData.FirstName,
        lastName: decodedData.LastName,
        email: decodedData.Email
    };
    store.dispatch(userActions.add(user));
    store.dispatch(userActions.addRole(decodedData.Role));
}