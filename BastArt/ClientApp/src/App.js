import React, { Component } from 'react';
import { Route ,Switch} from 'react-router';
import { Layout } from './_components/Layout';
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

import './_static/css/app.css';
import { authService } from './_services/authService';
import Portfolio from './Views/Portfolio';

export default class App extends Component {
    static displayName = App.name;

    componentWillMount() {
		if(sessionStorage.token !== undefined){
            authService.loginByToken();
		}
  	}

    render () {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/portfolio' component={Portfolio} />
                </Switch>
            </Layout>
        );
    }
}
