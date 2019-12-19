import React, { Component } from 'react'
import { ProfileHeader } from '../_components/portfolio/ProfileHeader'
import { Artworks } from '../_components/portfolio/Artworks'
import { Navigation } from '../_components/portfolio/Navigation'

import {getByUserId} from '../_helpers/portfoliosApi';
import {connect} from 'react-redux';
import TagBox from '../_components/portfolio/TagBox';


class Portfolio extends Component {
    state={
        portfolioFetched: false,
        owner: false,
        portfolio: []
    }
    
    componentDidMount() {
        const {id, currentUser} = this.props;
        if(currentUser !== null){
            if(id === currentUser.id)
            this.setState({owner: true});
        }
        this.fetchPortfolio(id);
    }
    

    render(){
        return (
            <React.Fragment>
                <div className="screen">
                    {this.state.portfolioFetched
                        ?<ProfileHeader user={this.state.portfolio.user}/>
                        :<p>Loading...</p>
                    }
                </div>
                <div className="screen">
                    {this.state.portfolioFetched
                        ?<TagBox/>
                        :<p>Loading...</p>
                    }
                </div>
                <div className="screen">
                    <Navigation />
                    <hr />
                    {this.state.portfolioFetched
                        ?<Artworks graphics={this.state.portfolio.graphics}/>
                        :<p>Loading...</p>
                    }
                </div>
            </React.Fragment>
        )
    }

    fetchPortfolio = async (id) =>{
        const portfolio = await getByUserId(id);
        this.setState({portfolio, portfolioFetched: true});
    } 
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    role: state.role
})

export default connect(mapStateToProps, {}) (Portfolio);
// export default Portfolio;