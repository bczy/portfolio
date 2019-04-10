import React, { Component } from 'react';

import styled from 'styled-components';

import Card from './components/Card';
import Marquee from './components/Marquee';
import SocialsLinks from './components/SocialLinks';

class App extends Component {
  render() {
    return (
      <Portfolio>
        <Marquee message="helloWorld"/>
        <Card/>
        <SocialsLinks/>
      </Portfolio>
    );
  }
}
//TODO add flex layout
const Portfolio = styled.div`  
body {

}
`
export default App;
