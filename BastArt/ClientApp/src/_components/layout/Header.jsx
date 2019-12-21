import React, { Component } from 'react'
import DropMenu from './DropMenu';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        // const {role, currentUser} = this.props;
         return(
            <nav className="navbar navbar-dark">
                <Link style={{textDecoration: "none", color: "white"}} to={'/'} className="navbar-brand">
                    <big>BastArt</big>
                </Link>
                <DropMenu />
            </nav>
        )
    }
}
export default Header;