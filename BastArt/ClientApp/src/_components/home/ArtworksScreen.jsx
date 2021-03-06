import React, { Component } from 'react'
import {ArtworksTiles} from '../common/ArtworksTiles';

class ArtworksScreen extends Component{

    render(){
        const list = [200, 220, 180, 190 , 200, 220, 210 ,170, 200, 220, 180, 190 , 200, 220, 210 ,170];

        const childElements = list.map((height, index) => {
            return (
                 <div key={index} className="image-element m-1">
                    {/* <Link to={'/artist/:artistId'}> */}
                        <img src={"https://picsum.photos/191/" + height}/>
                    {/* </Link> */}
                 </div>
             );
         });

        return(
            <div className="screen container" id="artworks-screen">
                <span><h2 className="text-justify">Sample Artworks</h2></span>
                <ArtworksTiles>
                    {childElements}
                </ArtworksTiles>
            </div>
        );
    }
}
export default ArtworksScreen;