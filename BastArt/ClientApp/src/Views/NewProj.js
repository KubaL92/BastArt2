import React, { Component } from "react";
import Stepper from 'bs-stepper'


class NewProj extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
        };
    }

    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        })
    }

    onSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="screen">
                <div id="stepper1" class="bs-stepper">
                    <div class="bs-stepper-header">
                        <div class="step" data-target="#test-l-1">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">1</span>
                                <span class="bs-stepper-label">Wybierz typ projektu</span>
                            </button>
                        </div>
                        <div class="line"></div>
                        <div class="step" data-target="#test-l-2">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">2</span>
                                <span class="bs-stepper-label">Wybierz artystę</span>
                            </button>
                        </div>
                        <div class="line"></div>
                        <div class="step" data-target="#test-l-3">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">3</span>
                                <span class="bs-stepper-label">Opisz projekt</span>
                            </button>
                        </div>
                        <div class="line"></div>
                        <div class="step" data-target="#test-l-4">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">4</span>
                                <span class="bs-stepper-label">Dodatkowe dane</span>
                            </button>
                        </div>
                    </div>
                    <div class="bs-stepper-content">
                        <form onSubmit={this.onSubmit}>
                            <div id="test-l-1" class="content">
                                <div class="form-group">
                                    <label>Zaznacz wszystkie kategorie jakie Cię interesują</label>
                                    <div> DUPA DUPA DUPA</div>
                                </div>
                                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                            </div>
                            <div id="test-l-2" class="content">
                                <div class="form-group">
                                    <label>Wybierz artystę/artystów, którzy Cię interesują</label>
                                    <div> DUPA DUPA DUPA</div>
                                </div>
                                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                            </div>
                            <div id="test-l-3" class="content">
                                <div class="form-group">
                                    <label>Opisz projekt, który chcesz zrealizować</label>
                                    <div> DUPA DUPA DUPA</div>
                                </div>
                                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                            </div>
                            <div id="test-l-4" class="content text-center">
                                <div class="form-group">
                                    <label>Zaznacz termin ostateczny oraz podaj sugerowaną stawkę (opcjonalnie)</label>
                                    <div> DUPA DUPA DUPA</div>
                                </div>
                                <button type="submit" class="btn btn-primary mt-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewProj;