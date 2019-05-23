import React, { useRef, useMemo } from 'react'
import { animated } from 'react-spring-three'
import { useRender } from 'react-three-fiber'
import * as THREE from 'three'

export default function Building ({ top, args, x, y, z, textureUrl, hasBanner }) {
  const url =
    textureUrl instanceof Array ? textureUrl[(Math.random() * textureUrl.length) | 0] : textureUrl
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  const building = useRef()

  useRender(() => {
    building.current.position.x = x - (top.value / 250) * z
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
