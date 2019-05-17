import React from 'react'

import { createGlobalStyle } from 'styled-components'

import Welcome from './components/Welcome'
import Card from './components/Card'
import City from './components/City'

import { useSpring } from 'react-spring'

export default function App () {
  const [springProp, setSpringProp] = useSpring(() => ({
    scrollRatio: 0,
    config: { mass: 10, tension: 550, friction: 140 }
  }))

  const calc = () =>
    window.scrollY /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight)

  return (
    <div onWheel={_ => setSpringProp({ scrollRatio: calc() })}>
      <GlobalStyle />
      <Welcome scrollRatio={springProp.scrollRatio} />
      <City scrollRatio={springProp.scrollRatio} />
      <Card />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  color: #ccc;
  background-color: #222;
  margin:0;
  padding:0;
  font-family: 'Muli', sans-serif;
  overflow-y: scroll;
  overflow-x: hidden;
}

div {
  @import url('https://fonts.googleapis.com/css?family=Muli');
}
`
