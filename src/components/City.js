import React, { useMemo } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
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

function Skyline (nbBuildings, url, width, height, y, z, randomSpacing = false) {
  const BuildingsBgTexture = useMemo(
    () => new THREE.TextureLoader().load(url),
    [url]
  )
  const backGroundBuildings = []

  for (var i = 0; i < nbBuildings; i++) {
    let x = -(i * width) + (width * nbBuildings) / 2
    if (randomSpacing) x += Math.random() * width

    backGroundBuildings.push({
      texture: BuildingsBgTexture,
      x: x,
      y: y,
      z: z,
      args: [width, height]
    })
  }
  return backGroundBuildings
}
function City () {
  return (
    <>
      <Canvas style={{ height: '350px' }} camera={{ position: [0, 0, 110] }}>
        <Foreground
          buildings={Skyline(
            15,
            'img/buildings-bg.png',
            144,
            124,
            -20,
            10,
            true
          )}
        />
        <Foreground
          buildings={Skyline(20, 'img/skyline-a.png', 128, 240, 0, 0)}
        />
      </Canvas>
    </>
  )
}

export default City
