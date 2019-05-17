import React, { useCallback } from 'react'
import { useSpring } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import Card from './components/Card'
import City from './components/City'
import Welcome from './components/Welcome'

export default function App () {
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  )

  const onScroll = useCallback(e => set({ top: e.target.scrollTop }), [])

  return (
    <div>
      <GlobalStyle />
      <Welcome top={top} mouse={mouse} />
      <City top={top} mouse={mouse} />
      <Card />
      <ScrollContainer onScroll={onScroll} onMouseMove={onMouseMove}>
        <div style={{ height: '525vh' }} />
      </ScrollContainer>
    </div>
  )
}

const ScrollContainer = styled.div(() => ({
  position: 'absolute',
  overflow: 'auto',
  top: '0px',
  width: '100%',
  height: '200vh',
  fontSize: '20em',
  fontWeight: '800',
  lineHeight: '0.9em'
}))

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
