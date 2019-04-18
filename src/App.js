import React from 'react';

import { createGlobalStyle } from 'styled-components';

import WelcomeBanner from './components/WelcomeBanner';
import SocialsLinks from './components/SocialLinks';

function App(){
  // Define what props.theme will look like
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=VT323');
    body {
      background-color: #0000FF;
      word-wrap: break-word;
    }`

  return (
    <>
      <GlobalStyle whiteColor />
      <WelcomeBanner/>
      <SocialsLinks/>
    </>
      
  );
}

export default App;
