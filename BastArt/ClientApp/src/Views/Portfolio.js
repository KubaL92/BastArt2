import React, { Component } from 'react'
import { ProfileHeader } from '../_components/portfolio/ProfileHeader'
import { Artworks } from '../_components/portfolio/Artworks'
import { Navigation } from '../_components/portfolio/Navigation'

import {getByUserId} from '../_helpers/portfoliosApi';
import {connect} from 'react-redux';


class Portfolio extends Component {
    state={
        portfoliosFetched: false,
        owner: false,
        portfolios: []
    }
    
    componentDidMount() {
        const {id, currentUser} = this.props;
        console.log(id);
        if(currentUser !== null){
            if(id === currentUser.id)
            this.setState({owner: true});
        }
        this.fetchPortfolios(id);
    }
    

    render(){
        return (
            <React.Fragment>
                <div className="screen">
                    
                    {this.state.portfoliosFetched
                        ?<ProfileHeader user={this.state.portfolios.user}/>
                        :<p className="container">Loading...</p>
                    }
                </div>
                <div className="screen">
                    <Navigation />
                    {this.state.portfoliosFetched
                        ?<Artworks portfolios={this.state.portfolios}/>
                        :<p>Loading...</p>
                    }
                </div>
            </React.Fragment>
        )
    }

    fetchPortfolios = async (id) =>{
        const portfolios = await getByUserId(id);
        this.setState({portfolios, portfoliosFetched: true});
    } 
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    role: state.role
})

export default connect(mapStateToProps, {}) (Portfolio);
// export default Portfolio;