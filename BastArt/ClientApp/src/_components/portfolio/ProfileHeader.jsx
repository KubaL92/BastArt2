import React, { Component } from 'react'
import {Container} from 'reactstrap';
import ProfileInfoPanel from './ProfileInfoPanel';


export class ProfileHeader extends Component{
    render(){
        return(
            <div className="screen">
                <Container fluid id="background" style={{backgroundImage: "url(https://picsum.photos/1280/720)", height: 400, width: '100%'}}>
                    <ProfileInfoPanel />
                </Container>
            </div>
        )
    }
}
