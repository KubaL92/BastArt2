import React, { Component } from 'react';
import NavBar from '../_components/home/NavBar';
import ArtworksScreen from '../_components/home/ArtworksScreen';
import HomeScreen from '../_components/home/HomeScreen';
import AboutScreen from '../_components/home/AboutScreen';
import Tutorial from '../_components/home/TutorialScreen';
import '../_static/css/home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
		<div id="home-page" className="container">
            <NavBar />
            <HomeScreen />
            <ArtworksScreen />
            <Tutorial />
            <AboutScreen />
		</div>
    );
  }
}
