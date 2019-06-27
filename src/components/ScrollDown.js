import React from 'react'
import { animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'
import i18n from '../i18n'

export default function ScrollMessage ({ top }) {
  const translateLeft = scrollRatio => `${1 - scrollRatio / 250}`

  return (
    <Blinky>
      <animated.div style={{ opacity: top.interpolate(translateLeft) }}>
        {i18n.t('scroll')}
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
  }
  div {
    font-size: 10em;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;
  }
`
