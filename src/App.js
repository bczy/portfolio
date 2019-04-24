import React, { Component } from 'react';

import { createGlobalStyle } from 'styled-components';

import Card from './components/Card';
import Marquee from './components/Marquee';
import Welcome from './components/Welcome';
import SocialsLinks from './components/SocialLinks';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Marquee message="helloWorld"/>
        <Welcome/>
        <Card/>
        <SocialsLinks/>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`

body {
  color: #777;
  background-color: #EFEFEF;
  word-wrap: break-word;
  font-family: 'Muli', sans-serif
}
div {
  @import url('https://fonts.googleapis.com/css?family=Muli');
}
`

export default App;
