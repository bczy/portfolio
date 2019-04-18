import React from 'react';
import i18n from '../i18n';
import styled from 'styled-components';

function WelcomeBanner(){
  const welcomeCardLines = i18n.t('header', { returnObjects: true });

  return (
    <Banner>
      {welcomeCardLines.map((line, index) => 
        <div key={index.toString()}>{line}</div>
      )}
    </Banner>
  );
}

const Banner = styled.div`  
{
  margin: 1em auto;
  padding: 1em;
  width: 90%;
}
div{
  font-size: 2em
  font-family: 'VT323', monospace;
  color: #FFFF00;
}
`
export default WelcomeBanner;
