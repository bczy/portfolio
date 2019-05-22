import React, { useCallback } from 'react'
import { useSpring } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import City from './components/City'
import Welcome from './components/Welcome'
import ScrollMessage from './components/ScrollMessage'

export default function App () {
  const [{ top }, set] = useSpring(() => ({
    config: { mass: 1000, tension: 8000, friction: 5000 },
    top: 0
  }))

  const onScroll = useCallback(e => {
    set({ top: e.target.scrollTop })
  }, [])

  return (
    <>
      <GlobalStyle />
      <Scroller>
        <City top={top} />
        <Welcome top={top} />
      </Scroller>
      <ScrollMessage top={top} />
      <ScrollContainer className='crt' onScroll={onScroll}>
        <div className='crt' style={{ height: '1525vh' }} />
      </ScrollContainer>
    </>
  )
}

const ScrollContainer = styled.div(() => ({
  position: 'absolute',
  overflow: 'auto',
  top: '0px',
  width: '100%',
  height: '100vh'
}))
const Scroller = styled.div``

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
.crt::after {
  content: ' ';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
}
.crt::before {
  content: ' ';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 200% 3px, 6px 100%;
}
div {
  @import url('https://fonts.googleapis.com/css?family=VT323');
}
`
