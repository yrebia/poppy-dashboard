<script setup lang="ts">
import { capitalize } from 'vue'

const childs = [
  {
    name: 'Lucas',
    age: 6,
    progressions: [
      {
        data: [4, 8, 6, 3, 5, 7, 6, 9]
      },
      {
        data: [8, 6, 9, 5, 3, 8, 7, 6]
      },
      {
        data: [3, 2, 6, 5, 6, 5, 8, 9]
      }
    ]
  },
  {
    name: 'Mathieu',
    age: 10,
    progressions: [
      {
        data: [5, 4, 8, 2, 3, 1, 9, 2]
      },
      {
        data: [9, 6, 8, 1, 10, 3, 6, 2]
      },
      {
        data: [1, 8, 7, 10, 7, 3, 1, 5]
      }
    ]
  }
]
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
      <h3 class="text-2xl font-semibold">Progressions</h3>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <NuxtLink :to="`/dashboard/child/${$route.params.name}/`">
          <div class="p-4 rounded-md ring-1 bg-white ring-neutral-200">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-8 h-8 mr-4 rounded-full ring-1 bg-neutral-50 ring-neutral-200"
              >
                <Icon name="lucide:wand" size="16" />
              </div>
              <p class="text-sm font-medium">Les mots magiques</p>
            </div>
            <ChartLine
              :labels="[
                '24/06',
                '25/06',
                '26/06',
                '27/06',
                '28/06',
                '29/06',
                '30/06',
                '01/07'
              ]"
              :data="[
                {
                  label: 'Note',
                  values:
                    childs.find(
                      (child) => child.name.toLowerCase() === $route.params.name
                    )?.progressions[0].data || [],
                  color: 'blue'
                }
              ]"
              :grid="true"
              :tooltip="true"
              class="w-full h-40"
            />
          </div>
        </NuxtLink>
        <NuxtLink :to="`/dashboard/child/${$route.params.name}/`">
          <div class="p-4 rounded-md ring-1 bg-white ring-neutral-200">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-8 h-8 mr-4 rounded-full ring-1 bg-neutral-50 ring-neutral-200"
              >
                <Icon name="lucide:locate-fixed" size="16" />
              </div>
              <p class="text-sm font-medium">Chasse aux sons</p>
            </div>
            <ChartLine
              :labels="[
                '24/06',
                '25/06',
                '26/06',
                '27/06',
                '28/06',
                '29/06',
                '30/06',
                '01/07'
              ]"
              :data="[
                {
                  label: 'Note',
                  values:
                    childs.find(
                      (child) => child.name.toLowerCase() === $route.params.name
                    )?.progressions[1].data || [],
                  color: 'blue'
                }
              ]"
              :grid="true"
              :tooltip="true"
              class="w-full h-40"
            />
          </div>
        </NuxtLink>
        <NuxtLink :to="`/dashboard/child/${$route.params.name}/`">
          <div class="p-4 rounded-md ring-1 bg-white ring-neutral-200">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-8 h-8 mr-4 rounded-full ring-1 bg-neutral-50 ring-neutral-200"
              >
                <Icon name="lucide:puzzle" size="16" />
              </div>
              <p class="text-sm font-medium">Puzzle parlant</p>
            </div>
            <ChartLine
              :labels="[
                '24/06',
                '25/06',
                '26/06',
                '27/06',
                '28/06',
                '29/06',
                '30/06',
                '01/07'
              ]"
              :data="[
                {
                  label: 'Note',
                  values:
                    childs.find(
                      (child) => child.name.toLowerCase() === $route.params.name
                    )?.progressions[2].data || [],
                  color: 'blue'
                }
              ]"
              :grid="true"
              :tooltip="true"
              class="w-full h-40"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
