import React, { useRef, useMemo } from 'react'
import { animated } from 'react-spring-three'
import { useRender } from 'react-three-fiber'
import * as THREE from 'three'

export default function Car ({ args, canvasWidth, textureUrl, y, z, x, top }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(textureUrl), [textureUrl])
  const car = useRef()
  const xOrigin = x
  useRender(() => {
    if (car.current.position.x > -150 - top.value) {
      car.current.position.x = x - (1 + (top.value / 250) * z)
    } else {
      car.current.position.x = 1000
      x = (Math.random() * xOrigin) | (0 + 150 + top.value)
    }
    x--
  })

  return (
    <animated.mesh ref={car} position={new THREE.Vector3(x, y, z)}>
      <planeGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' transparent>
        <primitive attach='map' object={texture} depthTest />
      </meshBasicMaterial>
    </animated.mesh>
  )
}
