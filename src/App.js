import React, { useCallback } from 'react'
import { useSpring } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import Card from './components/Card'
import City from './components/City'
import Welcome from './components/Welcome'

export default function App () {
  const [{ top }, set] = useSpring(() => ({ top: 0 }))

  const onScroll = useCallback(e => {
    set({ top: e.target.scrollTop })
  }, [])

  return (
    <>
      <GlobalStyle />
      <City top={top} />
      <Welcome top={top} />
      <Card />
      <ScrollContainer onScroll={onScroll}>
        <div style={{ height: '525vh' }} />
      </ScrollContainer>
    </>
  )
}

const ScrollContainer = styled.div(() => ({
  position: 'absolute',
  overflow: 'auto',
  top: '0px',
  width: '100%',
  height: '150vh',
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
  font-family: VT323;
  overflow-y: scroll;
  overflow-x: hidden;
}

div {
  @import url('https://fonts.googleapis.com/css?family=VT323');
}
`
