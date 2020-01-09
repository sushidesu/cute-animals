import { makeNeko } from "./zdog/neko"
import { makeUsagi } from "./zdog/usagi"
import { makeKuma } from "./zdog/kuma"
import { makeSakana} from "./zdog/sakana"

const container = document.getElementsByClassName("container")[0]
const canvas = document.getElementsByTagName("canvas")
let split = 2

if (window.innerWidth >= 768) {
  split = 4
}
const length = container.offsetWidth / split * 0.75

for (let c of canvas) {
  c.width = length
  c.height = length
}
const scale = 0.8 * length / 380

const neko = makeNeko("#neko", scale, true)
const usagi = makeUsagi("#usagi", scale, true)
const kuma = makeKuma("#kuma", scale, true)
const sakana = makeSakana("#sakana", scale, true)
const animate = () => {
  neko.updateRenderGraph()
  usagi.updateRenderGraph()
  kuma.updateRenderGraph()
  sakana.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()
