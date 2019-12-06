import React, { Component } from 'react'
//import '../../_static/css/navbar.css';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark mt-2">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="btn nav-item nav-link">Home</button>
                        <button className="btn nav-item nav-link">Tutorial</button>
                        <button className="btn nav-item nav-link">Artworks</button>
                        <button className="btn nav-item nav-link">About</button>
                    </div>
                </div>
            </nav>
        )
    }

}
export default NavBar;