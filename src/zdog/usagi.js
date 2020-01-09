import Zdog from "zdog"
import { colors } from '../variables'

const main = colors.body

export const makeUsagi = (selector, zoom, drag) => {
  const illo = new Zdog.Illustration({
    element: selector,
    zoom: zoom,
    dragRotate: drag,
    translate: { y: 40 }
  })

  const head = new Zdog.Shape({
    addTo: illo,
    stroke: 160,
    color: main,
    path: [
      { x: -20 },
      { x:  20 }
    ]
  })

  // ear
  const ear_left = new Zdog.Shape({
    addTo: illo,
    color: main,
    stroke: 80,
    path: [
      { y: 0 },
      { y: 90 }
    ],
    translate: { x: -50, y: -150 },
    rotate: { z: -0.1 }
  })
  ear_left.copy({
    translate: { x: 50, y: -150 },
    rotate: { z: 0.1 }
  })

  // eye
  const eye_left = new Zdog.Shape({
    addTo: illo,
    stroke: 14,
    path: [
      { y: -1 },
      { y: 1 }
    ],
    translate: { x: -30, y: -20, z: 90 }
  })
  eye_left.copy({
    translate: { x: 30, y: -20, z: 90 }
  })

  // mouse
  new Zdog.Shape({
    addTo: illo,
    stroke: 14,
    closed: false,
    path: [
      { x: -14, y: 10 },
      { x: 0, y: 0 },
      { x: 14, y: 10 }
    ],
    translate: { y: 10, z: 90 }
  })

  illo.updateRenderGraph()

  return illo
}
