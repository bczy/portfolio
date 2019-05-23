import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import i18n from '../i18n'

export default function ScrollingLink ({ top }) {
  const translateLeft = scrollRatio => `translate3d(${(0.5 + -scrollRatio / 10) * 1.5}vh, 1vh, 0)`
  // TODO SHOULD SCROLL FROM TOP
  // URL and Anchor should be a props
  return (
    <animated.div style={{ transform: top.interpolate(translateLeft), position: 'absolute' }}>
      <WelcomeContainer>
        <div className='message'>
          <a href='github.com'>{i18n.t('github')}</a>
        </div>
      </WelcomeContainer>
    </animated.div>
  )
}

const WelcomeContainer = styled.div`
  .message {
    width: max-content;
    font-size: 5em;
    letter-spacing: 0.001em;
    padding-left: 45em;
    color: yellow;
  }
`
