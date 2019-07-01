import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useSpring, a } from 'react-spring/three'
import { useThree } from 'react-three-fiber'

import { vertexShader, fragmentShader } from '../resources/shaders/XFadeShader'

export default function ImageWebgl ({ url1, url2, disp, intensity, hovered }) {
  const { progress } = useSpring({ progress: hovered ? 1 : 0 })

  const { gl, invalidate } = useThree()

  const args = useMemo(
    () => {
      const loader = new THREE.TextureLoader()
      const texture1 = loader.load(url1, invalidate)
      const texture2 = loader.load(url2, invalidate)
      const dispTexture = loader.load(disp, invalidate)

      dispTexture.wrapS = dispTexture.wrapT = THREE.RepeatWrapping
      texture1.magFilter = texture2.magFilter = THREE.LinearFilter
      texture1.minFilter = texture2.minFilter = THREE.LinearFilter

      texture1.anisotropy = gl.capabilities.getMaxAnisotropy()
      texture2.anisotropy = gl.capabilities.getMaxAnisotropy()
      return {
        uniforms: {
          effectFactor: { type: 'f', value: intensity },
          dispFactor: { type: 'f', value: 0 },
          texture: { type: 't', value: texture1 },
          texture2: { type: 't', value: texture2 },
          disp: { type: 't', value: dispTexture }
        },
        vertexShader,
        fragmentShader
      }
    },
    [url1, url2, disp]
  )

  return (
    <mesh>
      <planeBufferGeometry attach='geometry' args={[8, 8]} />
      <a.shaderMaterial attach='material' args={[args]} uniforms-dispFactor-value={progress} />
    </mesh>
  )
}
