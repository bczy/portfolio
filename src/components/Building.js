import React, { useRef } from 'react'
import { animated } from 'react-spring-three'
import { useRender } from 'react-three-fiber'
import * as THREE from 'three'

function Building ({ top, x, args, texture, y, z }) {
  const initialX = x
  const building = useRef()
  useRender(() => {
    building.current.position.x = initialX - (top.value / 50) * z
  })

  return (
    <animated.mesh ref={building} position={new THREE.Vector3(x, y, z)}>
      <planeGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' transparent>
        <primitive attach='map' object={texture} depthTest />
      </meshBasicMaterial>
    </animated.mesh>
  )
}

export default Building
