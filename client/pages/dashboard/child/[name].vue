<script setup lang="ts">
import { capitalize } from 'vue'
</script>
<template>
  <div class="h-[calc(100vh-64px)] py-6 bg-neutral-50">
    <div class="flex items-center max-w-6xl h-28 px-6 mx-auto">
      <h1 class="text-4xl font-semibold">
        {{ capitalize($route.params.name as string) }}
      </h1>
    </div>
    <hr class="border-neutral-200" />
    <div class="max-w-6xl px-6 py-12 mx-auto">
      <h3 class="text-2xl font-semibold">Statistiques</h3>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <Line
          :options="{ responsive: true }"
          :data="{
            labels: ['January', 'Febuary', 'March'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20, 12]
              }
            ]
          }"
        />
        <Line
          :options="{ responsive: true }"
          :data="{
            labels: ['January', 'Febuary', 'March'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20, 12]
              }
            ]
          }"
        />
        <Line
          :options="{ responsive: true }"
          :data="{
            labels: ['January', 'Febuary', 'March'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20, 12]
              }
            ]
          }"
        />
      </div>
    </div>
  </div>
</template>
