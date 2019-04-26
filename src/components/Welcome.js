import React from 'react';

import i18n from '../i18n';
import styled from 'styled-components';

function Welcome(props){
  return (
      <WelcomeContainer>
        <div>{i18n.t('welcome')}</div>
        <div>{i18n.t('description')}</div>
      </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div(() => ({
  margin: 0,
  position: "absolute",
  padding: "10%",
  width: "40%",
  "font-size" : "1.9em",
}));

export default Welcome;
