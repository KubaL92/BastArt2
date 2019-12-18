import React, { Component } from 'react'
import Masonry from 'react-masonry-component';

export class ArtworksTiles extends Component{

    render(){
        const masonryOptions = {transitionDuration: 0};
        const imagesLoadedOptions = { background: '.my-bg-image-el' }

        return(
                <Masonry
                    className={'my-gallery-class'} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {this.props.children}
                </Masonry>
        );
    }
}