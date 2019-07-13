import React, { useMemo } from 'react'
import * as THREE from 'three'
import { a } from 'react-spring/three'
import { useThree, useRender } from 'react-three-fiber'

import { vertexShader, fragmentShader } from '../resources/shaders/AnimatedTextureShader'

// TODO make a texture array from config or props...
export default function AnimatedSign ({ position, args }) {
  const { invalidate } = useThree()

  let randomTextureId = (Math.random() * 3) | 0

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    const texture1 = loader.load('img/banner-big-1.png', invalidate)
    const texture2 = loader.load('img/banner-big-2.png', invalidate)
    const texture3 = loader.load('img/banner-big-3.png', invalidate)

    return {
      uniforms: {
        texture1: { type: 't', value: texture1 },
        texture2: { type: 't', value: texture2 },
        texture3: { type: 't', value: texture3 },
        textureId: { type: 'f', value: randomTextureId }
      },
      vertexShader,
      fragmentShader
    }
  })

  useRender(() => {
    if (Math.random() > 0.99) randomTextureId = (Math.random() * 3) | 0
  })
  return (
    <>
      <planeBufferGeometry attach='geometry' args={args} position={position} />
      <a.shaderMaterial
        attach='material'
        args={[texture]}
        uniforms-textureId-value={randomTextureId}
      />
    </>
  )
}
