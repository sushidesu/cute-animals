export default class Canvas {
  constructor(id, size, scale) {
    this.parent = document.getElementById(id)
    this.illusts = []
    this.size = size
    this.scale = scale
  }

  add(makefunc) {
    const i = this.parent.childElementCount + 1
    const id = `canvas${i}`
    const item = document.createElement("div")
    item.classList.add("item")
    const canvas = document.createElement("canvas")
    canvas.id = `canvas${i}`
    canvas.width = this.size
    canvas.height = this.size
    item.appendChild(canvas)
    this.parent.appendChild(item)

    const illustration = makefunc(`#${id}`, this.scale, true)
    this.illusts.push(illustration)
  }

  render() {
    this.illusts.forEach(illo => {
      illo.updateRenderGraph()
    })
    const animate = () => {this.render()}
    requestAnimationFrame(animate)
  }
}
