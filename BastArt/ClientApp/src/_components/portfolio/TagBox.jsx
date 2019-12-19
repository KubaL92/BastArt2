import React, { Component } from 'react'
import {Badge} from 'reactstrap';

class TagBox extends Component {
    render() {
        return (
            <div>
                <Badge color="light" className="m-1">Primary</Badge>
                <Badge color="light" className="m-1">Secondary</Badge>
                <Badge color="light" className="m-1">Success</Badge>
                <Badge color="light" className="m-1">Danger</Badge>
                <Badge color="light" className="m-1">Warning</Badge>
                <Badge color="light" className="m-1">Info</Badge>
                <Badge color="light" className="m-1">Light</Badge>
                <Badge color="light "className="m-1">Dark</Badge>
            </div>
        )
    }
}

export default TagBox;