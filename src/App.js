import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Marquee from './components/Marquee';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Marquee message="helloWorld"/>
        <Card/>
        <ul>
          <ul><img alt="github profil" src="img/github-logo.png"/></ul>
          <ul><img alt="likedin profil" src="img/js-logo.png"/></ul>
          <ul><img alt="instagram profil" src="img/linkedin-logo.png"/></ul>
        </ul>
      </div>
    );
  }
}

const styles = {
  app: {
    'text-align': 'center',
    color: '#333'  
  },
};

export default App;
