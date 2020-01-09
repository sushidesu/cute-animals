import { makeNeko } from "./zdog/neko"

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
