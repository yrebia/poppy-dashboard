<script setup lang="ts">
const childs = [
  { name: 'Lucas', age: 6 },
  { name: 'Mathieu', age: 10 }
]
</script>

<template>
  <div class="h-[calc(100vh-64px)] p-6 bg-neutral-50">
    <div class="grid grid-cols-3 gap-4">
      <NuxtLink
        v-for="child of childs"
        :to="`/dashboard/child/${child.name.toLowerCase()}`"
      >
        <div class="p-4 rounded-md ring-1 bg-white ring-neutral-200">
          <p class="text-sm font-medium">{{ child.name }}</p>
          <p class="text-sm text-neutral-600">{{ child.age }} ans</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
