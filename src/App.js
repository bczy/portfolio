import React, { useCallback } from 'react'
import { useSpring } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import City from './components/City'
import ScrollingMessage from './components/ScrollingMessage'
import ScrollDown from './components/ScrollDown'

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
      <City top={top} />
      <ScrollDown top={top} />
      <ScrollingMessage
        top={top}
        messages={[{ message: 'welcome' }, { message: 'description' }, { message: 'extra' }]}
        paddingLeft='9em'
      />
      <ScrollingMessage
        top={top}
        messages={[{ message: 'siteMadeWidth' }, { message: 'technoList' }, { message: 'assets' }]}
        paddingLeft='100em'
      />
      <ScrollingMessage
        top={top}
        messages={[{ message: 'sitePurpose' }, { message: 'fun' }, { message: 'learnTechz' }]}
        paddingLeft='200em'
      />
      <ScrollingMessage
        top={top}
        messages={[
          { message: 'checkIt' },
          { message: 'gitHub', link: 'https://linkedin.com/bczy' },
          { message: 'linkedin', link: 'https://github.com/bczy' }
        ]}
        paddingLeft='300em'
      />
      <ScrollingMessage
        top={top}
        messages={[{ message: 'thanks' }, { message: 'medium' }]}
        paddingLeft='370em'
      />
      <ScrollContainer onScroll={onScroll}>
        <div className='crt' style={{ height: '1000vh' }} />
      </ScrollContainer>
    </>
  )
}
const ScrollContainer = styled.div(() => ({
  position: 'absolute',
  overflow: 'auto',
  top: '0px',
  width: '100%',
  height: '100%',
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
