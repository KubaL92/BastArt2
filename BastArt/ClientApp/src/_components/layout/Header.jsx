import React, { Component } from 'react'
import DropMenu from './DropMenu';

class Header extends Component{
    render(){
        const {role, currentUser} = this.props;
         return(
            <nav className="navbar navbar-dark">
                <a className="navbar-brand" href="#">
                    {/* <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
                    {/* <Link to={'/'}> */}
                        <big>BastArt</big>
                    {/* </Link> */}
                </a>
                <DropMenu />
            </nav>
        )
    }
}
export default Header;