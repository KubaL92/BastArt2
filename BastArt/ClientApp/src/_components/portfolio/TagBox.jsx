import React, { Component } from 'react'
import {Badge} from 'reactstrap';

class TagBox extends Component {
    render() {
        const {tags} = this.props;
        console.log(tags);
        return (
            <React.Fragment>
                {tags.length > 0
                    ?tags.map((tag, index) => <Badge key={index} color="light" className="m-1">{tag.tag.name}</Badge>)
                    :<p className="text-muted">Nothing to see here!</p>
                }

            </React.Fragment>
        )
    }
}

export default TagBox;