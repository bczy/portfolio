import React from 'react'
import { Canvas } from 'react-three-fiber'
import getLevelData from '../levelData'
import Building from './Building'
import Car from './Car'

const Foreground = ({ buildings }) => {
  return buildings.map((building, i) => {
    const hasBanner = Math.random() > 0.8
    return <Building key={i} {...building} hasBanner />
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
  const { buildingLayers, cars } = getLevelData(top)
  return (
    <Canvas style={{ height: '100%', position: 'fixed' }} camera={{ position: [0, 0, 110] }}>
      {buildingLayers.map((building, i) => (
        <Foreground buildings={Skyline(building)} key={i} />
      ))}
      {cars.map((car, i) => (
        <Car {...car} key={i} top />
      ))}
    </Canvas>
  )
}
