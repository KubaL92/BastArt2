import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './_services/history';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router history={history} basename={baseUrl}>
    <App />
  </Router>,
  rootElement);

registerServiceWorker();

