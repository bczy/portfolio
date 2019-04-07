import React, { Component } from 'react';
import './App.css';
import i18n from './i18n';

class App extends Component {
  render() {
    return (
      <section className="App">
      <h1>{i18n.t('welcome')}</h1>
          <p>
            {i18n.t('presentation.line1')}
            <br/>
            {i18n.t('presentation.line2')}
          </p>
          <p>{i18n.t('presentation.line3')}</p>
          <p>{i18n.t('presentation.line4')}</p>
          <div>
            <img alt="github profil" src="img/gihub-logo.png"/>
            <img alt="likedin profil" src="img/gihub-logo.png"/>
            <img alt="instagram profil" src="img/gihub-logo.png"/>
          </div>
      </section>
    );
  }
}

export default App;
