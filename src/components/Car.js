import React, { useRef, useMemo } from 'react'
import { animated } from 'react-spring-three'
import { useRender } from 'react-three-fiber'
import * as THREE from 'three'

export default function Car ({ args, textureUrl, y, z, x, top }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(textureUrl), [textureUrl])
  const car = useRef()
  const xOrigin = x
  useRender(() => {
    // TODO make this dynamic!!!
    if (car.current.position.x > -135 - top.value) {
      car.current.position.x = x - (1 + (top.value / 250) * z)
    } else {
      console.log(
        'reseting car position: ' + car.current.position.x + ' - ' + xOrigin + ' x => ' + x
      )
      car.current.position.x = 1000
      x = Math.random() * xOrigin + (0 + 135 + top.value)
      console.log('   x is now : ' + x)
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
