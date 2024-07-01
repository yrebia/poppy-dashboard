import { createApp, type App } from 'vue'
import type { Chart, TooltipModel } from 'chart.js'
// @ts-ignore
import Tooltip from '../components/utils/Tooltip.vue'

interface VueElement extends HTMLElement {
  __vue_app__?: App<Element>
}

export const chartTooltip = (context: {
  chart: Chart<any>
  tooltip: TooltipModel<any>
}) => {
  const { chart, tooltip } = context
  let mountPoint = chart.canvas.parentNode?.querySelector<VueElement>('div')

  if (!mountPoint) {
    mountPoint = document.createElement('div')
    chart.canvas.parentNode?.appendChild(mountPoint)
  } else {
    if (mountPoint.__vue_app__) {
      mountPoint.__vue_app__.unmount()
    }
  }

  if (tooltip.opacity === 0) {
    mountPoint.style.opacity = '0'
    return
  } else {
    mountPoint.style.opacity = '1'
  }
  const { offsetLeft } = chart.canvas
  const parentWidth = (chart.canvas.parentNode as HTMLElement).offsetWidth

  mountPoint.style.position = 'absolute'
  mountPoint.style.pointerEvents = 'none'
  mountPoint.style.zIndex = '9999'
  mountPoint.style.transition = 'all .1s ease'

  const body = tooltip.body.map((b, i) => ({
    labels: b.lines.map((l) => l.split(': ')[0]),
    values: b.lines.map((l) => l.split(': ')[1]),
    colors:
      tooltip.labelColors[i].borderColor === 'rgba(0,0,0,0.1)'
        ? tooltip.labelColors[i].backgroundColor
        : tooltip.labelColors[i].borderColor
  }))

  const tooltipVNode = h(Tooltip, {
    title: tooltip.title.join(', ') || '',
    data: body
  })

  const app = createApp(tooltipVNode)
  app.mount(mountPoint)
  mountPoint.__vue_app__ = app

  requestAnimationFrame(() => {
    const tooltipWidth = mountPoint.offsetWidth
    let leftPosition = tooltip.caretX + offsetLeft + 8
    const rightEdge = leftPosition + tooltipWidth + 8

    if (rightEdge > parentWidth) {
      leftPosition = parentWidth - tooltipWidth - 8
    }

    mountPoint.style.left = `${leftPosition}px`
    mountPoint.style.top = `16px`
  })
}
