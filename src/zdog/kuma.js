import Zdog from "zdog"
import { colors } from '../variables'

export const makeKuma = (selector, zoom, drag) => {
  const illo = new Zdog.Illustration({
    element: selector,
    zoom: zoom,
    dragRotate: drag,
    translate: { y: 10 }
  })

  const head = new Zdog.Shape({
    addTo: illo,
    color: colors.body,
    path: [
      { x: -14 },
      { x:  14 }
    ],
    stroke: 160
  })

  const face = new Zdog.Group({
    addTo: illo,
    translate: { z: 80 }
  })

  // ear
  const ear_left = new Zdog.Group({
    addTo: illo,
    translate: { x: -60, y: -60 },
    rotate: { z: -0.6 }
  })
  // ear_outer_left
  new Zdog.Ellipse({
    addTo: ear_left,
    color: colors.body,
    width: 64,
    height: 60,
    stroke: 20,
    fill: true
  })
  // ear_inner_left
  new Zdog.Ellipse({
    addTo: ear_left,
    diameter: 30,
    stroke: 8,
    fill: true,
    quarters: 2,
    closed: true,
    rotate: { z: -Zdog.TAU/4 }
  })
  // ear_right
  ear_left.copyGraph({
    translate: { x: 60, y: -60 },
    rotate: { z: 0.6 }
  })

  // eye
  const eye_left = new Zdog.Shape({
    addTo: face,
    stroke: 8,
    path: [
      { y: -10 },
      { y:  10 }
    ],
    translate: { x: -28, y: -26}
  })
  eye_left.copy({
    translate: { x: 28, y: -26 }
  })

  // mouse
  new Zdog.Ellipse({
    addTo: face,
    width: 20,
    height: 24,
    stroke: 6,
    translate: { y: 10 }
  })

  return illo
}
