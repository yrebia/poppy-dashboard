<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type ChartData as ChartJSData,
  Filler
} from 'chart.js'
import colors from 'tailwindcss/colors'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

interface ChartData {
  label: string
  values: number[]
  color?: keyof typeof colors
}

const props = withDefaults(
  defineProps<{
    labels: string[]
    data: ChartData[]
    grid?: boolean
    xaxis?: boolean
    yaxis?: boolean
    legend?: boolean | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    class?: string
    tooltip?: boolean
  }>(),
  {
    grid: false,
    xaxis: false,
    yaxis: false,
    tooltip: true
  }
)

const id = useId()

const chartOptions = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  layout: {
    padding: {
      top: 2,
      left: 2,
      right: 2,
      bottom: 2
    }
  },
  plugins: {
    legend: {
      display: false
    },
    htmlLegend: {
      containerId: id
    },
    tooltip: {
      enabled: false,
      position: 'nearest',
      external: props.tooltip ? chartTooltip : undefined
    },
    filler: {
      propagate: false
    }
  },
  scales: {
    x: {
      display: props.xaxis,
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 10,
      ticks: {
        stepSize: 5
      },
      display: props.grid || props.yaxis,
      labels: false,
      grid: {
        display: props.grid
      },
      title: {
        display: false
      }
    }
  }
}))

const chartData = computed<ChartJSData<'line'>>(() => ({
  labels: props.labels,
  datasets: props.data.map(({ label, values }, index) => ({
    label,
    data: values,
    backgroundColor: (context) => {
      const bgColor = colors[props.data[index].color || 'blue'][500] + '35'

      if (!context.chart.chartArea) return

      const {
        ctx,
        chartArea: { top, bottom }
      } = context.chart
      const bgGradient = ctx.createLinearGradient(0, top, 0, bottom)

      bgGradient.addColorStop(0, bgColor)
      bgGradient.addColorStop(1, bgColor)

      return bgGradient
    },
    tension: 0,
    borderColor: colors[props.data[index].color || 'blue'][500],
    borderWidth: 2,
    pointBackgroundColor: colors[props.data[index].color || 'blue'][500],
    pointRadius: 0,
    pointHoverRadius: 3,
    fill: 'origin'
  }))
}))
</script>
<template>
  <div class="relative">
    <ClientOnly>
      <template #fallback>
        <slot name="placeholder" />
        <div
          v-if="!$slots.placeholder"
          :class="$props.class"
          class="flex items-center justify-center rounded-md bg-gray-10 text-gray-400"
        >
          <Icon name="lucide:loader" class="w-6 h-6 animate-spin" />
        </div>
      </template>
      <div
        v-if="
          $props.legend === true ||
          $props.legend === 'top-left' ||
          $props.legend === 'top-right'
        "
        :id="`dashui-legend-${id}`"
        :class="{ 'justify-end': $props.legend === 'top-right' }"
        class="flex"
      ></div>
      <div :class="$props.class">
        <Line :options="chartOptions" :data="chartData" />
      </div>
      <div
        v-if="
          $props.legend === 'bottom-left' || $props.legend === 'bottom-right'
        "
        :id="`dashui-legend-${id}`"
        :class="{ 'justify-end': $props.legend === 'bottom-right' }"
        class="flex"
      ></div>
    </ClientOnly>
  </div>
</template>
