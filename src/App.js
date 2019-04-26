import React, { useState, useLayoutEffect } from 'react';

import { createGlobalStyle } from 'styled-components';

import Card from './components/Card';
import Marquee from './components/Marquee';
import Welcome from './components/Welcome';

function App () {
  const [scroll, updateScroll] = useState(0);
  useLayoutEffect(() => {
    let requestRunning = false;
    function handleScroll(){
      if (!requestRunning) {
        requestRunning = window.requestAnimationFrame(() => {
          updateScroll(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
          requestRunning = false;
        });
      }
    }

    window.addEventListener('scroll', handleScroll);
  })
 
  return (
    <>
      <GlobalStyle />
      <Welcome scroll={scroll}/>
      <Marquee scroll={scroll} message="helloWorld"/>
      <Card/>
    </>
  );
  
}

const GlobalStyle = createGlobalStyle`
body {
  color: #777;
  background-color: #EFEFEF;
  margin:0;
  font-family: 'Muli', sans-serif
}

div {
  @import url('https://fonts.googleapis.com/css?family=Muli');
}
`

export default App;
