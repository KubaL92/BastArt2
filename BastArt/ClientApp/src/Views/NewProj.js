import React, { Component } from "react";
import Stepper from 'bs-stepper'
import { Step1 } from '../_components/Steps/Step1';
import { Step2 } from '../_components/Steps/Step2';
import { Step3 } from '../_components/Steps/Step3';
import { Step4 } from '../_components/Steps/Step4';
import { getAll } from '../_helpers/tagsApi'

class NewProj extends Component {
    state = {
        tags: [],
        fetched: false
    }

    componentDidMount=()=> {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        })
        this.fetchTags()
    }

    fetchTags = async () => {
        const tags = await getAll()
        this.setState({ tags, fetched : true })
    }

    onSubmit(e) {
        e.preventDefault()
        const data = new FormData(event.target);
        //data.get
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
                                {this.state.fetched
                                    ? < Step1 tags={this.state.tags} />
                                    : <p>Loading</p>
                                }
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