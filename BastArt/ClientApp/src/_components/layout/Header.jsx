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
            </nav>
        )
    }

}
export default Header;