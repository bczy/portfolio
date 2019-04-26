import React, { useState } from 'react';

import i18n from '../i18n';
import styled from 'styled-components';

function Welcome(props){
  const translateValue = `translateX(${(1- props.scroll) * 100}%)`;
  return (
    <WelcomeContainer style={{transform:translateValue}} scroll={props.scroll}>
      <div>{i18n.t('welcome')}</div>
      <div>{i18n.t('description')}</div>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div(() => ({
  margin: "25% 0%",
  width: "50%",
  "font-size" : "2em",
}));

export default Welcome;
