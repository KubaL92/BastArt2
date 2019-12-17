import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark">
                <a className="navbar-brand" href="#">
                    {/* <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
                    {/* <Link to={'/'}> */}
                        <big>BastArt</big>
                    {/* </Link> */}
                </a>
                <div class="btn-group dropleft">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                             </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href={'/login'}>Login</a>
                        <a class="dropdown-item" href={'/register'}>Register</a>
                    </div>
                 </div>
            </nav>
        )
    }

}
export default Header;