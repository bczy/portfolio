import React from 'react'

import { createGlobalStyle } from 'styled-components'

import Welcome from './components/Welcome'
import Card from './components/Card'
import City from './components/City'

import { useSpring } from 'react-spring'

function App () {
  const calc = () =>
    window.scrollY /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight)

  const [props, set] = useSpring(() => ({
    scrollRatio: 0,
    config: { mass: 2, tension: 550, friction: 140 }
  }))

  return (
    <div onWheel={_ => set({ scrollRatio: calc() })}>
      <GlobalStyle />
      <Welcome scrollRatio={props.scrollRatio} />
      <City scrollRatio={props.scrollRatio} />
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

export default App
