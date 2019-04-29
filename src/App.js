import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { useSpring, animated } from 'react-spring'

import Card from './components/Card';
import Marquee from './components/Marquee';
import Welcome from './components/Welcome';

export default function App () {
  const [springProp, setSpringProp] = useSpring(() => ({ scrollRatio: 0, config: { mass: 10, tension: 550, friction: 140 } }))
  
  const calc = () => window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  const leftParallax = (scrollRatio) => `translate3d(${(0.50 - scrollRatio) * 100}%, 10%, 0)`

  return (
    <div onWheel={_ => setSpringProp( {scrollRatio : calc()})}>
      <GlobalStyle />
      <animated.div style={{ transform: springProp.scrollRatio.interpolate(leftParallax) }} >
        <Welcome/>
      </animated.div>
      <animated.div style={{ opacity: springProp.scrollRatio}}>
        <Marquee message="helloWorld"/>
      </animated.div>
      <Card/>
    </div>
  );
  
}

const GlobalStyle = createGlobalStyle`
body {
  color: #777;
  background-color: #EFEFEF;
  margin:0;
  font-family: 'Muli', sans-serif
}

div {
  @import url('https://fonts.googleapis.com/css?family=Muli');
}
`
