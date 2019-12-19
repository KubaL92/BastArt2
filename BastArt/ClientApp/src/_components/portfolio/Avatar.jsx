import React, { Component } from 'react'
import styled from 'styled-components';

const AvatarImg = styled.img`
    border-radius: 100%;
    height: 70px;
    width: 70px;
    /* border: 2px white solid; */
    margin-left: auto;
    margin-right: auto;
`

const AvatarWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    /* border: 2px white solid; */
    width: 70px;
`

export class Avatar extends Component {
    render() {
        return (
            <AvatarWrapper>
                <AvatarImg src={"data:image/jpg;base64," + this.props.profile.avatar } alt="avatar"/>
            </AvatarWrapper>
        )
    }
}
