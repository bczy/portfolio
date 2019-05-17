import React from 'react'
import * as THREE from 'three'

function Building ({ x, args, texture }) {
  return (
    <mesh position={new THREE.Vector3(x, 0, 0)}>
      <planeGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' transparent>
        <primitive attach='map' object={texture} depthTest={false} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default Building
