import React, { Component } from 'react'
import {ProfileInfoPanel} from './ProfileInfoPanel';
import styled from 'styled-components';

const ProfileHeaderContainer = styled.div`
    height: 400px;
    width: 100%;
    position: relative;
`

export class ProfileHeader extends Component{
    render(){
        const {user} = this.props;
        return(
            <ProfileHeaderContainer style={{backgroundImage: `url("data:image/jpg;base64,${user.profile.background}")`}} 
                    className="container">
                <ProfileInfoPanel user={user} />
            </ProfileHeaderContainer>
        )
    }


}
