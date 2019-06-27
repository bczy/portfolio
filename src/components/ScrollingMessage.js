import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import i18n from '../i18n'

export default function ScrollingMessage ({ top, messages, paddingLeft }) {
  const translateLeft = scrollRatio => `translate3d(${(0.5 + -scrollRatio / 10) * 1.5}vh, 1vh, 0)`

  return (
    <animated.div style={{ transform: top.interpolate(translateLeft), paddingLeft }}>
      <Container>
        <div className='message'>
          {messages.map(message => (
            <div>
              {message.link ? (
                <a href={message.link}>{i18n.t(message.message)}</a>
              ) : (
                i18n.t(message.message)
              )}
            </div>
          ))}
        </div>
      </Container>
    </animated.div>
  )
}

const Container = styled.div`
  .message {
    width: max-content;
    font-size: 5em;
    letter-spacing: 0.001em;
    color: yellow;
    position: absolute;
  }
  a {
    color: yellow;
  }
`
