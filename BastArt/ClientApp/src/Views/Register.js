import React, { Component } from 'react';
import { authService } from '../_services/authService';
import { isConstructorDeclaration } from 'typescript';


class Register extends Component {

    render() {
        return (
            <div className = "screen">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input name="name" type="text" className="form-control" id="username" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input name="surname" type="text" className="form-control" id="surname" placeholder="Surname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input name="email" type="email" className="form-control" id="email" placeholder="Email" />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" />
                    <small className="form-text text-muted">
                        Password should contain at least: 8 signs, one upper case letter, one lower case letter, one digit
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Create account</button>
                </form>
            </div>
        );
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const userData = {
            Username: data.get("username"),
            FirstName: data.get("name"),
            LastName: data.get("surname"),
            Email: data.get("email"),
            Password: data.get("password")
        };
        const response = await authService.register(userData);
        console.log(response);
    }
}

export default Register;
