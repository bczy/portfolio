import React, { useRef, useMemo } from 'react'
import { animated } from 'react-spring-three'
import { useRender } from 'react-three-fiber'
import * as THREE from 'three'

export default function Car ({ args, canvasWidth, textureUrl, y, z, x }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(textureUrl), [textureUrl])
  const car = useRef()
  useRender(() => {
    if (car.current.position.x > 0) car.current.position.x -= 1
    else car.current.position.x = canvasWidth
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
