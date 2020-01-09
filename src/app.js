import Canvas from "./canvas"
import { makeNeko } from "./zdog/neko"
import { makeUsagi } from "./zdog/usagi"
import { makeKuma } from "./zdog/kuma"
import { makeSakana} from "./zdog/sakana"

const container = document.getElementsByClassName("container")[0]
let split = 2
if (window.innerWidth >= 768) {
  split = 4
}
const length = container.offsetWidth / split * 0.75
const scale = 0.8 * length / 380

const canvas = new Canvas("container", length, scale)
canvas.add(makeNeko)
canvas.add(makeUsagi)
canvas.add(makeKuma)
canvas.add(makeSakana)

canvas.render()
