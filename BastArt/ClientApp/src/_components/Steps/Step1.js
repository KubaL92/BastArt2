import React, { Component } from "react";

export class Step1 extends Component {
    render() {
        return (
            <div class="form-group">
                <label>Zaznacz wszystkie kategorie jakie Cię interesują</label>
                <div class="custom-control">
                    <input type="checkbox" class="custom-control-input" id="logotypes"></input>
                    <label class="custom-control-label" for="customCheck1">LogoTypes</label>
                    <input type="text"></input>
                </div>
                
                
            </div>
        )
    }
}
