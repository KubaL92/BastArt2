import React, { Component } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      	<div id="app-wrapper">
          <Header />
        	<div id="content-wrapper">
          		{this.props.children}
          	</div>
          <Footer />
      	</div>
    );
  }
}
