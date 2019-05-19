import React from 'react'
import * as THREE from 'three'

function Building ({ x, args, texture, y, z }) {
  return (
    <mesh position={new THREE.Vector3(x, y, z)}>
      <planeGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' transparent>
        <primitive attach='map' object={texture} depthTest />
      </meshBasicMaterial>
    </mesh>
  )
}

export default Building
