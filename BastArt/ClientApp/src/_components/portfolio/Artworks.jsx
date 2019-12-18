import React, { Component } from 'react'
import {ArtworksTiles} from '../common/ArtworksTiles';

export class Artworks extends Component{

    render(){
        const list = [200, 220, 180, 190 , 200, 220, 210 ,170, 200, 220, 180, 190 , 200, 220, 210 ,170];
        console.log();
        const childElements = this.props.graphics.map((graphic, index) => {
            return (
                 <div key={index} className="image-element m-1">
                    {/* <Link to={'/artist/:artistId'}> */}
                        <img src={"data:image/jpg;base64," + graphic.base64Pic} height="200" width="191"/>
                    {/* </Link> */}
                 </div>
             );
         });

        return(
            <ArtworksTiles>
                {childElements}
            </ArtworksTiles>
        );
    }
}