import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      	<div id="app-wrapper">
        	<div id="content-wrapper">
          		{this.props.children}
          	</div>
      	</div>
    );
  }
}
