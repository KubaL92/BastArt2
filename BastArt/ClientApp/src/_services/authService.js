import history from './history';
import { userActions } from '../_redux/user/duck';
import store from '../_redux/store'

export const authService = {
    login
};

async function login(accountData) {
    const requestOptions = 
    {
        method: 'POST',
        headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(accountData)
    };

    return fetch(`https://localhost:44334/api/authorization/login`, requestOptions)
        .then(res => res.json())
        .then(resJson => {
            // store token in session to keep user logged in between page refreshes
            sessionStorage.setItem('token', resJson.token);

            store.dispatch(userActions.addRole(resJson.role));
            store.dispatch(userActions.add(resJson.user));
        })
        .then(setTimeout(function(){
            history.push('/')}, 500))
        .catch(error => console.log(error));
}