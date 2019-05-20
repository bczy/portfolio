import React, { useMemo, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import Building from './Building'

function Foreground ({ buildings }) {
  return buildings.map((building, i) => {
    return <Building key={i} {...building} />
  })
}

function Skyline ({ nbBuildings, url, width, height, y = 0, z = 0, top, randomSpacing }) {
  const BuildingsBgTexture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  const backGroundBuildings = []

  for (var i = 0; i < nbBuildings; i++) {
    let x = i * width - 120
    if (randomSpacing) x += Math.random() * width

    backGroundBuildings.push({
      texture: BuildingsBgTexture,
      x: x,
      y: y,
      z: z,
      args: [width, height],
      top: top
    })
  }
  return backGroundBuildings
}
function City ({ top }) {
  const canvas = useRef()
  const canvasWidth = canvas
  const firstLine = {
    nbBuildings: 20,
    url: 'img/skyline-a.png',
    width: 128,
    height: 240,
    top,
    z: 2
  }
  const secondLine = {
    nbBuildings: 15,
    url: 'img/buildings-bg.png',
    width: 67,
    height: 46,
    y: -40,
    z: 20,
    top,
    randomSpacing: true
  }
  const thirdLine = {
    nbBuildings: 15,
    url: 'img/buildings-bg.png',
    width: 77,
    height: 62,
    y: -30,
    z: 32,
    top,
    randomSpacing: true
  }
  return (
    <Canvas ref={canvas} style={{ height: '675px' }} camera={{ position: [0, 0, 110] }}>
      <Foreground buildings={Skyline(firstLine, canvasWidth)} />
      <Foreground buildings={Skyline(secondLine)} />
      <Foreground buildings={Skyline(thirdLine)} />
    </Canvas>
  )
}

export default City
