import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="screen" id = "about-screen">

                <h3> About Us </h3>
                <br />
                <h6 className="text-muted">
                    KJ&MONG Co. was founded by two great young minds who wanted to achieve greatness: Aleksander 'Baraciak' Nowicki and Krzysztof Jakub 'KJ' Lomber. The two became coworkers and friends by the end of 2018 and thanks to stupid conversations and more than a few smoked cigarettes they began to wonder how to conquer the world. At the end of 2019 the idea came to mind - how about creating a website for graphic designers and their clients to cooperate on every possible (even most twisted) idea and make it a reality? 
                    <br />
                    Let's make a BastArt!
                    <br /><br />
                    And that's how the story begins...
                </h6> 
            </div>
        )
    }
}

export default About;