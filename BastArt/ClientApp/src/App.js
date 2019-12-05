import React, { Component } from 'react';
import { Route ,Switch} from 'react-router';
import { Layout } from './_components/Layout';
import { Home } from './Views/Home';

import './_static/css/app.css';

export default class App extends Component {
    static displayName = App.name;

    render () {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Layout>
        );
    }
}
