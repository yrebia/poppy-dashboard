<script setup lang="ts">
const childs = [
  { name: 'Lucas', age: 6 },
  { name: 'Mathieu', age: 10 }
]
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-2xl font-semibold">Enfants</h3>
      <Button href="/dashboard/child/new">Ajouter un enfant</Button>
    </div>
    <p class="text-sm mt-4 mb-8">Gérez vos enfants, ajouter un nouvel.</p>
    <ul class="rounded-md divide-y ring-1 divide-neutral-200 ring-neutral-200">
      <li
        v-for="child of childs"
        class="flex items-center justify-between p-4 bg-white first-of-type:rounded-t-md last-of-type:rounded-b-md"
      >
        <div>
          <p class="text-sm font-medium">{{ child.name }}</p>
          <p class="text-sm text-neutral-600">{{ child.age }} ans</p>
        </div>
        <button
          class="flex items-center justify-center w-6 h-6 rounded-md transition-colors hover:bg-neutral-100"
        >
          <Icon name="lucide:ellipsis-vertical" size="16" />
        </button>
      </li>
    </ul>
  </div>
</template>
