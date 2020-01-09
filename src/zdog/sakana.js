import Zdog from "zdog"
import { colors } from '../variables'

export const makeSakana = (selector, zoom, drag) => {
  const illo = new Zdog.Illustration({
    element: selector,
    zoom: zoom,
    translate: { x: -30 },
    dragRotate: drag
  })

  const body = new Zdog.Group({
    addTo: illo
  })
  // body
  new Zdog.Shape({
    addTo: body,
    stroke: 80,
    color: colors.body,
    fill: true,
    closed: false,
    path: [
      { x: -60, y:  0 },
      { arc: [
        { x: -10, y: -60 },
        { x:  40, y:   0 }
      ]},
      { arc: [
        { x: -10, y: 60 },
        { x: -60, y:   0 }
      ]}
    ]
  })
  // tail
  new Zdog.Polygon({
    addTo: body,
    color: colors.body,
    stroke: 40,
    radius: 38,
    sides: 3,
    translate: { x: 110 },
    rotate: { z: -Zdog.TAU/4}
  })

  const face = new Zdog.Group({
    addTo: illo,
    translate: { z: 40 }
  })

  // eye
  const eye_left = new Zdog.Group({
    addTo: face,
    translate: { x: -45, y: -10 },
    rotate: { z: 0.8 }
  })
  new Zdog.Shape({
    addTo: eye_left,
    stroke: 12,
    path: [
      { x: -16 },
      { x:  16 }
    ]
  })
  new Zdog.Shape({
    addTo: eye_left,
    stroke: 12,
    path: [
      { y: -16 },
      { y:  16 }
    ]
  })

  // line
  new Zdog.Shape({
    addTo: face,
    stroke: 8,
    closed: false,
    path: [
      { y: -40 },
      { arc: [
        { y: 0, x: 20 },
        { y: 40 }
      ]}
    ],
    translate: { x: -4 }
  })

  return illo
}
