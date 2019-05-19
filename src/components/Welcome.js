import React from 'react'

import i18n from '../i18n'
import styled from 'styled-components'
import { animated } from 'react-spring'

function Welcome ({ top }) {
  const translateLeft = scrollRatio =>
    `translate3d(${(0.5 + scrollRatio) * 5}vh, 10%, 0)`

  return (
    <animated.div style={{ transform: top.interpolate(translateLeft) }}>
      <WelcomeContainer>
        <div>{i18n.t('welcome')}</div>
        <div>{i18n.t('description')}</div>
        <div>{i18n.t('extraContent')}</div>
      </WelcomeContainer>
    </animated.div>
  )
}

const WelcomeContainer = styled.div(() => ({
  margin: 0,
  padding: '0 10% 10% 10%',
  width: '40%',
  'font-size': '1.9em'
}))

export default Welcome
