import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import i18n from '../i18n'

function Welcome ({ top }) {
  const translateLeft = scrollRatio => {
    return `translate3d(${(0.5 + -scrollRatio) * 1.5}vh, 1vh, 0)`
  }

  return (
    <animated.div style={{ transform: top.interpolate(translateLeft), position: 'absolute' }}>
      <WelcomeContainer>
        <div className='message'>
          {i18n.t('welcome')} {i18n.t('description')} {i18n.t('extraContent')}
        </div>
      </WelcomeContainer>
    </animated.div>
  )
}

const WelcomeContainer = styled.div`
  .message {
    width: max-content;
    font-size: 15em;
    letter-spacing: 0.001em;
    padding-left: 10em;
    color: yellow;
  }
`

export default Welcome
