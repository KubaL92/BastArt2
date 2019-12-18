import React, { Component } from 'react'
import styled from 'styled-components';
import { Avatar } from './Avatar';


const ProfileInfoWrapper = styled.div`
    width: 20%;
    height: 40%;
    margin-left: auto;
    margin-right: auto;
    /* border: 2px white solid; */
    padding: 10px;
    position:absolute;
    bottom:2%;
    left: 40%; 
`

const Paragraph = styled.p`
    color: whitesmoke;
    text-align: center;
`

const TopDiv = styled.div`
    height: 50%;
    /* border: 2px white solid; */
`
const BotDiv = styled.div`
    height: 50%;
    /* border: 2px white solid; */
`

export class ProfileInfoPanel extends Component {
    render() {
        const {username, firstName, lastName} = this.props.user;
        return (
            <ProfileInfoWrapper className="container screen">
                <TopDiv>
                    <Avatar />
                </TopDiv>
                <BotDiv>
                    <Paragraph>{username}</Paragraph>
                    <Paragraph>{firstName + " " +lastName}</Paragraph>
                </BotDiv>
           
            </ProfileInfoWrapper>
        )
    }
}