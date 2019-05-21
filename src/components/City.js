import React, { useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import Building from './Building'

const  Foreground = ({ buildings }) => {
  return buildings.map((building, i) => {
    return <Building key={i} {...building} />
  })
}

const  Skyline = ({ nbBuildings, url, width, height, y = 0, z = 0, top, randomSpacing }) => {
  const BuildingsBgTexture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  
  const getSpace = () => (randomSpacing ? Math.random() * width : 0);
  return Array.from({length: nbBuildings}, (_, i) => ({
    texture: BuildingsBgTexture,
    x : i * width - 120  + getSpace(),
    y,
    z,
    args: [width, height],
    top,
  }))  ;
}

export default function City ({ top }) {
  const buildingLayers = [
    {
      nbBuildings: 4,
      url: 'img/skyline-a.png',
      width: 128,
      height: 240,
      top,
      z: 2
    },
    {
      nbBuildings: 30,
      url: 'img/buildings-bg.png',
      width: 67,
      height: 46,
      y: -40,
      z: 20,
      top,
      randomSpacing: true
    },
    {
      nbBuildings: 50,
      url: 'img/buildings-bg.png',
      width: 77,
      height: 62,
      y: -30,
      z: 32,
      top,
      randomSpacing: true
    }
  ]
  return (
    <Canvas style={{ height: '100%', position: 'fixed' }} camera={{ position: [0, 0, 110] }}>
      {buildingLayers.map((building, i) => (
        <Foreground buildings={Skyline(building)} key={i} />
      ))}
    </Canvas>
  )
}


