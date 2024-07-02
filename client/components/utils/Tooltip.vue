<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    data: {
      labels: string[]
      values: string[]
      colors: any
    }[]
    prefix?: string
    suffix?: string
  }>(),
  {
    prefix: '',
    suffix: ''
  }
)
</script>

<template>
  <div
    class="ring-1 ring-gray-200 rounded-md w-fit min-w-fit bg-white shadow-md z-10"
  >
    <ul class="px-3 pt-1.5">
      <li
        v-for="line in $props.data"
        class="flex items-center justify-between w-full"
      >
        <div class="flex items-center">
          <span
            class="rounded-full w-2 min-w-2 h-2"
            :style="{ backgroundColor: line.colors }"
          />
          <span class="ml-2 text-sm font-medium">
            {{ line.labels.join(', ') }}
          </span>
        </div>
        <code class="ml-1 text-xs font-medium">
          {{ prefix + line.values.join(', ') + suffix }}
        </code>
      </li>
    </ul>
    <div class="px-3 pb-1.5 text-xs text-center text-neutral-600">
      {{ $props.title }}
    </div>
  </div>
</template>
