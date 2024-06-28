<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <NuxtLink :to="href" class="font-medium text-primary-500">
    <slot />
  </NuxtLink>
</template>
