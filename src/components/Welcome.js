import React from 'react';
import i18n from '../i18n';
import styled from 'styled-components';

function Welcome(){
    return (
      <WelcomeContainer>
        <div>{i18n.t('welcome')}</div>
        <div>{i18n.t('description')}</div>
        <div>{i18n.t('idCard.hobbies')}</div>
      </WelcomeContainer>
    );
}

const WelcomeContainer = styled.div`  
{
  margin: auto;
  padding-top: 2em;
  padding-bottom: 2em;
  width: max-content;
}
div{
  font-size: 1em;
}
`
export default Welcome;
