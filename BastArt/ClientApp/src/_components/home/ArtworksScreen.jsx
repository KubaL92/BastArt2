import React, { Component } from 'react'
import Masonry from 'react-masonry-component';

class ArtworksScreen extends Component{

    render(){
        const masonryOptions = {transitionDuration: 0};
        const imagesLoadedOptions = { background: '.my-bg-image-el' }
        const list = [200, 220, 180, 190 , 200, 220, 210 ,170, 200, 220, 180, 190 , 200, 220, 210 ,170];

        const childElements = list.map(height => {
            return (
                 <div className="image-element m-1">
                    {/* <Link to={'/artist/:artistId'}> */}
                        <img src={"https://picsum.photos/198/" + height}/>
                    {/* </Link> */}
                 </div>
             );
         });

        return(
            <div className="screen container">
                <span><h2 className="text-justify">Sample Artworks</h2></span>
                <Masonry
                    className={'my-gallery-class'} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {childElements}
                </Masonry>
            </div>
        );
    }
}
export default ArtworksScreen;