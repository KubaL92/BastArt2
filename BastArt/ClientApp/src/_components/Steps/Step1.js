import React, { Component } from "react";

export class Step1 extends Component {
    render() {
        console.log(this.props.tags)
        return (
            <div class="form-group">
                <label>Zaznacz wszystkie kategorie jakie Cię interesują</label>
                {this.props.tags.map((tag, index) =>
                    <div key={index} class="custom-control">
                        <input type="checkbox" class="custom-control-input" value={tag.id}></input>
                        <label class="custom-control-label" for="customCheck1">{tag.name}</label>
                    </div>
                )
                }        

            </div>
        )
    }
}
