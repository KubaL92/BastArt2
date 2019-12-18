import React, { Component } from 'react'
import {ProfileInfoPanel} from './ProfileInfoPanel';
import styled from 'styled-components';

const ProfileHeaderContainer = styled.div`
    background-image: url("https://picsum.photos/1280/720");
    height: 400px;
    width: 100%;
    position: relative;
`

export class ProfileHeader extends Component{
    render(){
        return(
            <ProfileHeaderContainer className="container">
                <ProfileInfoPanel user={this.props.user} />
            </ProfileHeaderContainer>
        )
    }


}
