import React, { Component } from 'react'

export class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" id="navig">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="nav-buttons">
                        <button className="ml-4 nav-item nav-link">Artworks</button>
                        <button className="ml-4 nav-item nav-link">About</button>
                    </div>
                </div>
            </nav>
        )
    }
}
