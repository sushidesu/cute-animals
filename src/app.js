import { makeNeko } from "./zdog/neko"
import { makeUsagi } from "./zdog/usagi"

const container = document.getElementsByClassName("container")[0]
const canvas = document.getElementById("zdog")

canvas.width = container.offsetWidth
canvas.height = container.offsetHeight

const neko = makeUsagi("#zdog", 0.8, true)
const animate = () => {
  neko.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()
