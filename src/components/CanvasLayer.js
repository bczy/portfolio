import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'

import * as THREE from 'three'

import {
  apply as applyThree,
  Canvas,
  useRender,
  useThree
} from 'react-three-fiber'

import { apply as applySpring, useSpring, a } from 'react-spring/three'

import data from '../d  ata'
// Import and register postprocessing classes as three-native-elements for both react-three-fiber & react-spring
// They'll be available as native elements <effectComposer /> from then ØØØØØ ...
import { EffectComposer } from './postprocessing/EffectComposer'
import { RenderPass } from './postprocessing/RenderPass'
import { GlitchPass } from './postprocessing/GlitchPass'
import { animated } from 'react-spring/renderprops-universal'

applySpring({ EffectComposer, RenderPass, GlitchPass })
applyThree({ EffectComposer, RenderPass, GlitchPass })

/** This component loads an image and projects it onto a plane */
function Image ({ url, opacity, scale, ...props }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const unhover = useCallback(() => setHover(false), [])
  const { factor } = useSpring({ factor: hovered ? 1.1 : 1 })
  return (
    <a.mesh
      {...props}
      onHover={hover}
      onUnhover={unhover}
      scale={factor.interpolate(f => [scale * f, scale * f, 1])}
    >
      <planeBufferGeometry attach='geometry' args={[5, 5]} />
      <a.meshLambertMaterial attach='material' transparent opacity={opacity}>
        <primitive attach='map' object={texture} />
      </a.meshLambertMaterial>
    </a.mesh>
  )
}

/** This renders text via canvas and projects it as a sprite */
function Text ({
  children,
  position,
  opacity,
  color = 'white',
  fontSize = 410
}) {
  const {
    size: { width, height },
    viewport: { width: viewportWidth, height: viewportHeight }
  } = useThree()
  const scale = viewportWidth > viewportHeight ? viewportWidth : viewportHeight
  const canvas = useMemo(
    () => {
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = 2048
      const context = canvas.getContext('2d')
      context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillStyle = color
      canvas.style.position = 'fixed'
      context.fillText(children, 1024, 1024 - 410 / 2)
      return canvas
    },
    [children, width, height]
  )
  return (
    <a.sprite scale={[scale, scale, 1]} position={position}>
      <a.spriteMaterial attach='material' transparent opacity={opacity}>
        <canvasTexture
          attach='map'
          image={canvas}
          premultiplyAlpha
          onUpdate={s => (s.needsUpdate = true)}
        />
      </a.spriteMaterial>
    </a.sprite>
  )
}

/** This component creates a fullscreen colored plane */
function Background ({ color }) {
  const { viewport } = useThree()
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry attach='geometry' args={[1, 1]} />
      <a.meshBasicMaterial attach='material' color={color} depthTest={false} />
    </mesh>
  )
}
const leftPerspective = scrollRatio => `position:absolute`
/** This component creates a glitch effect */
const Effects = React.memo(({ factor }) => {
  const { gl, scene, camera, size } = useThree()
  const composer = useRef()
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size
  ])
  // This takes over as the main render-loop (when 2nd arg is set to true)
  useRender(() => composer.current.render(), true)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray='passes' args={[scene, camera]} />
      <a.glitchPass attachArray='passes' renderToScreen factor={factor} />
    </effectComposer>
  )
})

/** This component creates a bunch of parallaxed images */
function Images ({ top, mouse, scrollMax }) {
  return data.map(([url, x, y, factor, z, scale], index) => (
    <Image
      key={index}
      url={url}
      scale={scale}
      opacity={top.interpolate([0, 500], [0, 1])}
      position={interpolate([top, mouse], (top, mouse) => [
        (-mouse[0] * factor) / 50000 + x,
        (mouse[1] * factor) / 50000 +
          y * 1.15 +
          ((top * factor) / scrollMax) * 2,
        z + top / 2000
      ])}
    />
  ))
}
function onDown (event) {
  console.log(event)
}
/** This component maintains the scene */
function Scene ({ top, mouse, scrollRatio }) {
  console.log(scrollRatio, top, mouse)
  const { size } = useThree()
  const scrollMax = size.height * 4.5
  return (
    <animated.div
      style={{ transform: scrollRatio.interpolate(leftPerspective) }}
    >
      <a.spotLight
        intensity={1.2}
        color='white'
        position={mouse.interpolate((x, y) => [x / 100, -y / 100, 6.5])}
      />
      <Effects factor={top.interpolate([0, 150], [1, 0])} />
      <Background
        color={top.interpolate(
          [0, scrollMax * 0.25, scrollMax * 0.8, scrollMax],
          ['#27282F', '#247BA0', '#70C1B3', '#f8f3f1']
        )}
      />
      <Images top={top} mouse={mouse} scrollMax={scrollMax} />
      <Text
        opacity={top.interpolate([0, 200], [1, 0])}
        position={top.interpolate(top => [0, -1 + top / 200, 0])}
      >
        lorem
      </Text>
      <Text
        position={top.interpolate(top => [
          0,
          -20 + ((top * 10) / scrollMax) * 2,
          0
        ])}
        color='black'
        fontSize={150}
      >
        Ipsum
      </Text>
    </animated.div>
  )
}

/** Main component */
export default function Main (props) {
  // This tiny spring right here controlls all(!) the animations, one for scroll, the other for mouse movement ...
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
  console.log('as', props.scrollRatio)
  const scrollRatio = props.scrollRatio
  return (
    <div
      onPointerDown={onDown}
      style={{ position: 'fixed', width: '100%', height: '100%' }}
    >
      <Canvas className='canvas'>
        <Scene top={top} mouse={mouse} scrollRatio={scrollRatio} />
      </Canvas>
      <div className='scroll-container'>
        <div style={{ height: '525vh' }} />
      </div>
    </div>
  )
}
