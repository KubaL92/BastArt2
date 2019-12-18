import React, { Component } from 'react'
import styled from 'styled-components';

const AvatarImg = styled.img`
    border-radius: 100%;
    height: 50px;
    width: 50px;
    /* border: 2px white solid; */
    margin-left: auto;
    margin-right: auto;
`

const AvatarWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    /* border: 2px white solid; */
    width: 50px;
`

export class Avatar extends Component {
    render() {
        return (
            <AvatarWrapper>
                <AvatarImg src="https://picsum.photos/140/140" alt="avatar"/>
            </AvatarWrapper>
        )
    }
}