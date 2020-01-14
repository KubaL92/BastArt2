import React, { Component } from "react";

export class Step1 extends Component {
    render() {
        console.log(this.props.tags)
        return (
            <div class="form-group">
                <label>Zaznacz wszystkie kategorie jakie Cię interesują</label>
                {this.props.tags.map((tag, index) =>
                <form onSubmit={this.handleGetParams}>
                    <div key={index} class="custom-control">
                        <input type="checkbox"
                        // class="custom-control-input" 
                        value={tag.id}
                             onClick={e => this.props.onAddTag(e.target.value)}
                             >
                             </input>
                        <label class="custom-control-label" for="customCheck1">{tag.name}</label>
                    </div>
                </form>
                )
                }        

            </div>
        )
    }

    // handleGetParams(e){
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     const newProj = {
    //         Username: data.get("username"),
    //         FirstName: data.get("name"),
    //         LastName: data.get("surname"),
    //         Email: data.get("email"),
    //         Password: data.get("password")
    //     };
    //     this.props.handleAddProjDesc(newProj);
    // }
}
