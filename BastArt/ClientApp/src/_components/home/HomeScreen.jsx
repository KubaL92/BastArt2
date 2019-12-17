import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="screen" id = "home-screen">
                <h5> Welcome to CraftArt, the website where you can cooperate with graphic designers from all over the world to create everything that you wish for.
                <br />
                <br />
                    Communicate, cooperate and collaborate!</h5>
                <br />
                <a href="#" className="button">Start new project</a>
            </div>
            )
    }
}

export default Home;