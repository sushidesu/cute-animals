import Zdog from "zdog"

const colors = {
  body: "#9aecd5"
}

export const makeNeko = (selector, zoom, drag) => {
  const illo = new Zdog.Illustration({
    element: selector,
    zoom: zoom,
    dragRotate: drag
  })

  const main = colors.body
  const TAU = Zdog.TAU
  const head = new Zdog.Shape({
    addTo: illo,
    stroke: 200,
    color: main
  })

  const ears = new Zdog.Group({
    addTo: illo,
    translate: { x: -90, y: -80, z: 10 },
    rotate: { z: -0.6 }
  })

  const ear_left = new Zdog.Shape({
    addTo: ears,
    stroke: 20,
    path: [
      { x: 0, y: -10 },
      { x: 30, y: 30 },
      { x: -30, y: 30 }
    ],
    fill: true
  })

  const anoterEars = new Zdog.Group({
    addTo: illo,
    translate: { x: 90, y: -80, z: 10 },
    rotate: { z: 0.6 }
  })

  const ear_right = ear_left.copy({
    addTo: anoterEars
  })


  // eye
  const eye_right = new Zdog.Ellipse({
    addTo: head,
    diameter: 40,
    quarters: 2,
    stroke: 10,
    rotate: { z: -TAU / 4 },
    translate: { x: -40, z: 90 }
  })

  eye_right.copy({
    translate: { x: 40, z: 90 }
  })

  // mouse
  const mouse = new Zdog.Shape({
    addTo: head,
    stroke: 8,
    path: [
      { x: -14 },
      { x: 14 }
    ],
    translate: { y: 20, z: 90 }
  })

  // hige
  const left = new Zdog.Group({
    addTo: head,
    translate: { x: -90, y: 10, z: 60 }
  })

  const left_1 = new Zdog.Shape({
    addTo: left,
    stroke: 9,
    path: [
      { x: 15 },
      { x: -15 }
    ],
    rotate: { z: 0.4 }
  })

  left_1.copy({
    translate: { y: 40 },
    rotate: { z: -0.2 }
  })

  left.copyGraph({
    rotate: { z: TAU / 2 },
    translate: { x: 90, y: 50, z: 60 }
  })

  illo.updateRenderGraph()

  return illo
}

const container = document.getElementsByClassName("container")[0]
const canvas = document.getElementById("zdog")

canvas.width = container.offsetWidth
canvas.height = container.offsetHeight

const neko = makeNeko("#zdog", 0.8, true)
const animate = () => {
  neko.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()
