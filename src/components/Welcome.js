import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import i18n from '../i18n'

function Welcome ({ top }) {
  const translateLeft = scrollRatio => `translate3d(${(0.5 + -scrollRatio) * 2.5}vh, -600px, 0)`

  return (
    <animated.div style={{ transform: top.interpolate(translateLeft), position: 'absolute' }}>
      <WelcomeContainer>
        <div>
          {i18n.t('welcome')} {i18n.t('description')} {i18n.t('extraContent')}
        </div>
      </WelcomeContainer>
    </animated.div>
  )
}

const WelcomeContainer = styled.div(() => ({
  top: 0,
  margin: 0,
  padding: '0 0%',
  width: 'max-content',
  'font-size': '10em',
  letterSpacing: '0.025em',
  paddingLeft: '10em'
}))

export default Welcome
