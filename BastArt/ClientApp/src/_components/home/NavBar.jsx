import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
//import '../../_static/css/navbar.css';
// import { Link } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark" id="navig">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="nav-buttons">
                        <Link to="home-screen"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <button className="ml-4 nav-item nav-link">Home</button>
                        </Link>
                        <Link to="tutorial-screen"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <button className="ml-4 nav-item nav-link">Tutorial</button>
                        </Link>
                        <Link to="artworks-screen"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <button className="ml-4 nav-item nav-link">Artworks</button>
                        </Link>
                        <Link to="about-screen"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <button className="ml-4 nav-item nav-link">About</button>
                        </Link>
                    </div>
                </div>
            </nav>

            // <ul class="nav justify-content-center navbar">
            //     <li class="nav-item">
            //         <a class="nav-link" href="#">Active</a>
            //     </li>
            //     <li class="nav-item">
            //         <a class="nav-link" href="#">Link</a>
            //     </li>
            //     <li class="nav-item">
            //         <a class="nav-link" href="#">Link</a>
            //     </li>
            //     <li class="nav-item">
            //         <a class="nav-link disabled" href="#">Disabled</a>
            //     </li>
            // </ul>
        )
    }

}
export default NavBar;