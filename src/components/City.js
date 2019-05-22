import React, { useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Building from './Building'
import Car from './Car'

const Foreground = ({ buildings }) => {
  return buildings.map((building, i) => {
    return <Building key={i} {...building} />
  })
}

const Skyline = ({ nbBuildings, url, width, height, y = 0, z = 0, top, randomSpacing }) => {
  const getRandomSpacing = () => (randomSpacing ? Math.random() * width : 0)
  return Array.from({ length: nbBuildings }, (_, i) => ({
    textureUrl: url,
    x: i * width - 120 + getRandomSpacing(),
    y,
    z,
    args: [width, height],
    top
  }))
}

export default function City ({ top }) {
  const fiberCanvas = useRef()
  const buildingLayers = [
    {
      nbBuildings: 6,
      url: ['img/skyline-a.png', 'img/skyline-b.png'],
      width: 128,
      height: 240,
      top,
      z: 5
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
  const cars = [
    {
      textureUrl: 'img/v-police.png',
      args: [41, 15],
      y: 0,
      z: 26,
      canvasWidth: 335
    },
    {
      textureUrl: 'img/v-police.png',
      args: [31, 10],
      y: -15,
      z: 15,
      x: 200,
      canvasWidth: 335
    }
  ]
  return (
    <Canvas
      ref={fiberCanvas}
      style={{ height: '100%', position: 'fixed' }}
      camera={{ position: [0, 0, 110] }}
    >
      {buildingLayers.map((building, i) => (
        <Foreground buildings={Skyline(building)} key={i} />
      ))}
      {cars.map((car, i) => (
        <Car {...car} key={i} />
      ))}
    </Canvas>
  )
}
