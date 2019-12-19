import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="screen" id = "home-screen">
                <h5> Welcome to CraftArt, the website where you can cooperate with graphic designers from all over the world to create everything that you wish for.
                <br />
                <br />
                    Communicate, cooperate and collaborate!</h5>
                <br />
                <Link className="button" to={'/new-project'}>Start new project</Link>
            </div>
            )
    }
}

export default Home;