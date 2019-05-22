export default function getLevelData (top) {
  return {
    buildingLayers: [
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
    ],
    cars: [
      {
        textureUrl: 'img/v-police.png',
        args: [41, 15],
        x: 840,
        y: 5,
        z: 26,
        canvasWidth: 335
      },
      {
        textureUrl: 'img/v-police.png',
        args: [45, 18],
        x: 940,
        y: 0,
        z: 30,
        canvasWidth: 335
      },
      {
        textureUrl: 'img/v-police.png',
        args: [45, 18],
        x: 140,
        y: -30,
        z: 30,
        canvasWidth: 335
      },
      {
        textureUrl: 'img/v-police.png',
        args: [31, 10],
        y: -15,
        z: 15,
        x: 280,
        canvasWidth: 335
      },
      {
        textureUrl: 'img/v-police.png',
        args: [41, 15],
        x: 640,
        y: -10,
        z: 26,
        canvasWidth: 335
      },
      {
        textureUrl: 'img/v-police.png',
        args: [42, 16],
        x: 540,
        y: -25,
        z: 30,
        canvasWidth: 335
      },
      {
        textureUrl: 'img/v-police.png',
        args: [15, 5],
        y: -20,
        z: 7,
        x: 780,
        canvasWidth: 335
      }
    ]
  }
}
