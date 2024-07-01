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
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

const props = defineProps<{
  id?: string
  data: { labels: string[]; datasets: any[] }
  options?: any
}>()

const id = props.id ?? useId()
</script>

<template>
  <div>
    <Line :id="id" :options="options" :data="data" />
  </div>
</template>
