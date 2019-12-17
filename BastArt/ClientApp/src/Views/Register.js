import React, { Component } from 'react';
import history from '../_services/history';


class Register extends Component {

    render() {
        return (
            <div className = "screen">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input name="name" type="username" className="form-control" id="username" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input name="surname" type="surname" className="form-control" id="surname" placeholder="Surname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" />
                    <small id="emailHelp" className="form-text text-muted">
                        Password should contain at least: 8 signs, one upper case letter, one lower case letter, one digit
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Create account</button>
                </form>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {
            FirstName: data.get("name"),
            LastName: data.get("surname"),
            Email: data.get("email"),
            Password: data.get("password")
        }


        fetch("https://localhost:44334/api/authorization/register",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        )
            .then(history.push("/account/login"))
            .catch(error => console.log(error));
            
    }



}

export default Register;
