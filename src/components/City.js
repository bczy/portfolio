import React, { useMemo } from 'react'

import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { a, interpolate } from 'react-spring/three'

function Building (props) {
  if (!props.scrollRatio) return
  console.log('HEY', props.scrollRatio)
  const scroll = scrollRatio => {
    console.log('muf', scrollRatio)
    return scrollRatio * 100
  }
  const texture = useMemo(() => new THREE.TextureLoader().load(props.url), [
    props.url
  ])
  return (
    <a.mesh
      position={new THREE.Vector3(props.scrollRatio.interpolate(scroll), 0, 0)}
    >
      <planeGeometry attach='geometry' args={props.args} />
      <meshBasicMaterial attach='material' transparent>
        <primitive attach='map' object={texture} depthTest={false} />
      </meshBasicMaterial>
    </a.mesh>
  )
}
function Foreground (props) {
  return (
    <>
      {props.buildings.map((building, i) => (
        <Building
          key={i}
          url={building.url}
          position={new THREE.Vector3(building.x, -30, props.z)}
          scrollRatio={props.scrollRatio}
          args={[building.width, building.height]}
        />
      ))}
    </>
  )
}
function Skyline () {
  const skyline = [
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-b.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-b.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' },
    { url: 'img/skyline-a.png' }
  ]
  const buildingSize = { width: 64, height: 120 }
  const cityWidth = skyline.length * buildingSize.width

  return (
    <>
      {skyline.map((tile, i) => {
        const x = -(cityWidth / 2) + i * buildingSize.width
        const position = new THREE.Vector3(x, 0, 0)
        return (
          <Building
            key={i}
            url={tile.url}
            position={position}
            args={[buildingSize.width, buildingSize.height]}
          />
        )
      })}
    </>
  )
}

function City (props) {
  const backGroundBuildings = []
  const nbBuildings = 7
  for (var i = 0; i < nbBuildings; i++) {
    backGroundBuildings.push({
      url: 'img/buildings-bg.png',
      x: -(i * 77) + (77 * nbBuildings) / 2,
      width: 77,
      height: 62
    })
  }

  const foreGroundBuildings = [
    { url: 'img/near-buildings-bg.png', x: -20, width: 123, height: 52 },
    { url: 'img/near-buildings-bg.png', x: 120, width: 123, height: 52 }
  ]

  return (
    <Canvas
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '50em',
        margin: 0,
        padding: 0
      }}
      camera={{ position: [0, 0, 130] }}
    >
      <Foreground
        scrollRatio={props.scrollRatio}
        buildings={backGroundBuildings}
      />
    </Canvas>
  )
}

export default City
