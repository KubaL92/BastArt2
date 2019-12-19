import React, { Component } from 'react'
import { ProfileHeader } from '../_components/portfolio/ProfileHeader'
import { Artworks } from '../_components/portfolio/Artworks'
import { Navigation } from '../_components/portfolio/Navigation'
import {About} from '../_components/portfolio/About'

import {getByUserId} from '../_helpers/portfoliosApi';
import {connect} from 'react-redux';
import TagBox from '../_components/portfolio/TagBox';
import styled from 'styled-components';


const PortfolioContainer = styled.div`
    min-height: 600px;
` 


class Portfolio extends Component {
    state={
        portfolioFetched: false,
        owner: false,
        portfolio: [],
        show: 'Artworks'
    }
    
    componentDidMount() {
        const {id, currentUser} = this.props;
        if(currentUser !== null){
            if(id === currentUser.id)
            this.setState({owner: true});
        }
        this.fetchPortfolio(id);
    }
    
    onClickAbout = () =>{
        this.setState({show: 'About'});
    }

    onClickArtworks = () =>{
        this.setState({show: 'Artworks'});
    }

    render(){
        const {portfolioFetched, show, portfolio} = this.state;
        return (
            <React.Fragment>
                <div className="screen">
                    {portfolioFetched
                        ?<ProfileHeader user={portfolio.user}/>
                        :<p>Loading...</p>
                    }
                </div>
                <div className="screen">
                    {portfolioFetched
                        ?<TagBox/>
                        :<p>Loading...</p>
                    }
                </div>
                <div className="screen">
                    <PortfolioContainer>
                        <Navigation onClickAbout={this.onClickAbout} onClickArtworks={this.onClickArtworks} />
                        <hr />
                        {portfolioFetched
                            ?   (
                                    show === 'Artworks'
                                    ?<Artworks graphics={portfolio.graphics}/>
                                    :<About  about={portfolio.user.profile.about} style={{minHeight: "100"}}/>
                                )
                            :<p>Loading...</p>
                        }
                    </PortfolioContainer>
                </div>
            </React.Fragment>
        )
    }

    fetchPortfolio = async (id) =>{
        const portfolio = await getByUserId(id);
        console.log(portfolio, "portfolio");
        this.setState({portfolio, portfolioFetched: true});
    } 
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    role: state.role
})

export default connect(mapStateToProps, {}) (Portfolio);