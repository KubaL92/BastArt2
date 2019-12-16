import history from './history'

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
    
    return fetch(`https://localhost:44356/api/authorization/login`, requestOptions)
        .then(res => res.json())
        .then(resJson => {
            if(resJson.token !== undefined){
                console.log(resJson);
                // console.log(resJson, "I'am in authService");
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('token', resJson.token);
                sessionStorage.setItem('currentUser', resJson.user)
                // store.dispatch(userStore.add(resJson.owner));
            }
        })
        .then(setTimeout(function(){
            history.push('/')}, 500))
        .catch(error => console.log(error));
}