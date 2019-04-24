import React from 'react';
import i18n from '../i18n';
import styled from 'styled-components';

function Card(){
    return (
      <CardContainer>
        <div>{i18n.t('idCard.brief')}</div>
        <div>{i18n.t('idCard.skills')}</div>
        <div>{i18n.t('idCard.hobbies')}</div>
      </CardContainer>
    );
}

const CardContainer = styled.div`  
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
export default Card;
