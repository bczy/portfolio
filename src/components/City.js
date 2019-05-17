import React, { useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import Building from './Building'

function Foreground ({ buildings }) {
  return (
    <>
      {buildings.map((building, i) => {
        return <Building key={i} {...building} />
      })}
    </>
  )
}

function Skyline (nbBuildings, url) {
  const BuildingsBgTexture = useMemo(
    () => new THREE.TextureLoader().load(url),
    [url]
  )

  const backGroundBuildings = []

  for (var i = 0; i < nbBuildings; i++) {
    backGroundBuildings.push({
      texture: BuildingsBgTexture,
      x: -(i * 144) + (144 * nbBuildings) / 2,
      args: [144, 124]
    })
  }
  return backGroundBuildings
}
function City ({ top, mouse }) {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 110] }}>
        <Foreground
          top={top}
          mouse={mouse}
          buildings={Skyline(15, 'img/buildings-bg.png')}
        />
      </Canvas>
    </>
  )
}

export default City
