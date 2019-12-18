import React, { Component } from 'react'
import {ArtworksTiles} from '../common/ArtworksTiles';

export class Artworks extends Component{

    render(){
        const list = [200, 220, 180, 190 , 200, 220, 210 ,170, 200, 220, 180, 190 , 200, 220, 210 ,170];

        const childElements = list.map((height, index) => {
            return (
                 <div key={index} className="image-element m-1">
                    {/* <Link to={'/artist/:artistId'}> */}
                        <img src={"https://picsum.photos/197/" + height}/>
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