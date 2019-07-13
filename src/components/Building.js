import React, { useRef, useMemo } from 'react'
import { animated } from 'react-spring-three'
import { useRender } from 'react-three-fiber'
import * as THREE from 'three'

import AnimatedSign from './AnimatedSign'

export default function Building ({ top, args, x, y, z, textureUrl }) {
  const building = useRef()
  const sign = useRef()
  let time = 0

  const url =
    textureUrl instanceof Array ? textureUrl[(Math.random() * textureUrl.length) | 0] : textureUrl

  const buildingTexture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  const signTexture = useMemo(() => new THREE.TextureLoader().load('img/hotel-sign.png'), [
    'img/hotel-sign.png'
  ])

  // Building types: 0 => defaut, 1 => hotel
  const hasSign = Math.random() * 10 > 8
  const zRatio = z / 25
  let pos = new THREE.Vector3(x, y + 5, z)
  useRender(() => {
    const newX = x - (top.value / 250) * z
    building.current.position.x = newX
    if (sign.current) sign.current.position.x = x - (top.value / 250) * z
  })

  return (
    <>
      {hasSign ? (
        <animated.mesh ref={sign} position={new THREE.Vector3(x, y + 5, z)}>
          <planeGeometry attach='geometry' args={[23 * zRatio, 11 * zRatio]} />
          <meshBasicMaterial attach='material' transparent>
            <primitive attach='map' object={signTexture} depthTest />
          </meshBasicMaterial>
        </animated.mesh>
      ) : (
        Math.random() > 0.01 && (
          <animated.mesh
            ref={sign}
            position={
              new THREE.Vector3(x + (Math.random() * 5 - 10), y - 18 + Math.random() * 12, z + 1)
            }
          >
            <AnimatedSign args={[3 * zRatio, 9 * zRatio]} position={pos} time={time} />
          </animated.mesh>
        )
      )}
      }
      <animated.mesh ref={building} position={new THREE.Vector3(x, y, z)}>
        <planeGeometry attach='geometry' args={args} />
        <meshBasicMaterial attach='material' transparent>
          <primitive attach='map' object={buildingTexture} depthTest />
        </meshBasicMaterial>
      </animated.mesh>
    </>
  )
}
