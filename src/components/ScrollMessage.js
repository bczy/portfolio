import React from 'react'
import { animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'
import i18n from '../i18n'

function ScrollMessage ({ top }) {
  const translateLeft = scrollRatio => {
    console.log(`display: ${scrollRatio > 121 ? 'none' : 'block'}`)
    return `${scrollRatio > 121 ? 'none' : 'block'}`
  }
  return (
    <Blinky>
      <animated.div style={{ display: top.interpolate(translateLeft) }}>
        {i18n.t('scrollDown')}
      </animated.div>
    </Blinky>
  )
}

const blinker = keyframes`
{
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}`
const Blinky = styled.div`
   {
    animation: ${blinker} 1s infinite;
    animation-direction: alternate;
    font-size: 10em;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    width: 100%;
    height: 100%;
  }
`

export default ScrollMessage
