import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './_helpers/history';
import store from './_redux/store'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  	<Provider store={store}>
    	<Router history={history} basename={baseUrl}>
      		<App />
    	</Router>
  	</Provider>,
  rootElement);

registerServiceWorker();

