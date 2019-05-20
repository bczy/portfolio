import React from 'react'
import i18n from '../i18n'

import { animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'

const ratio = scrollRatio => 15 / scrollRatio
const clampedRatio = scrollRatio =>
  ratio(scrollRatio) > 45 && isFinite(ratio(scrollRatio)) ? 45 : ratio(scrollRatio)

const leftPerspective = scrollRatio =>
  `perspective(2.5em) rotateY(-${clampedRatio(scrollRatio)}deg)`
const rightPerspective = scrollRatio =>
  `perspective(2.5em) rotateY(${clampedRatio(scrollRatio)}deg)`

function Marquee (props) {
  return (
    <Box>
      <animated.div
        className='inner'
        style={{ transform: props.scrollRatio.interpolate(leftPerspective) }}
      >
        <span>{i18n.t(props.message)}</span>
      </animated.div>
      <animated.div
        className='inner'
        style={{ transform: props.scrollRatio.interpolate(rightPerspective) }}
      >
        <span>{i18n.t(props.message)}</span>
      </animated.div>
    </Box>
  )
}

const marquee = keyframes`
 {
	from {
		left: 100%;
	}

	to {
		left: -100%;
	}
}
`

const Box = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    align: center;
    width: 100%;
    font-size: 4.25em;
    padding: 1em 0;
    font-family: 'Muli', sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 0px -0px, 0px -0px, 0px 3px 0 #212121, 0px 3px 0 #212121, -3px 0px 0 #212121,
      3px 0px 0 #212121, -3px 0px 0 #212121, 3px 0px 0 #212121, -3px -3px 0 #212121,
      3px -3px 0 #212121, -3px 3px 0 #212121, 3px 3px 0 #212121, -3px 9px 0 #212121,
      0px 9px 0 #212121, 6px 2px 0 #212121, 0 9px 1px rgba(0, 0, 0, 0.1), 0 0 3px rgba(0, 0, 0, 0.1),
      0 3px 1px rgba(0, 0, 0, 0.3), 0 6px 3px rgba(0, 0, 0, 0.2), 0 9px 9px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.2), 0 18px 18px rgba(0, 0, 0, 0.15);
  }

  .inner {
    width: 400px;
    height: 200px;
    line-height: 200px;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 0%;
    filter: blur(0.05em) contrast(10);
  }

  .inner:first-child {
    background-color: burlywood;
    color: rgb(212, 202, 189);
    transform-origin: right;
  }

  .inner:last-child {
    background-color: rgb(228, 206, 177);
    color: antiquewhite;
    transform-origin: left;
  }

  .inner span {
    position: absolute;
    animation: ${marquee} 5s linear infinite;
  }

  .inner:first-child span {
    animation-delay: 2.5s;
    left: -100%;
  }
`

export default Marquee
