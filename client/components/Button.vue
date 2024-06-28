<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'outline' | 'link'
    size?: 'sm' | 'md' | 'lg' | 'icon'
    rounded?: boolean
    href?: string
  }>(),
  {
    variant: 'primary',
    rounded: false
  }
)
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    class="text-sm font-medium text-primary-500 hover:text-primary-400"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :class="{
      'rounded-full': rounded,
      'rounded-md': !rounded,
      'w-8 p-2': size === 'icon',
      'px-2': size !== 'icon',
      'bg-primary-500 hover:bg-primary-400 text-white ring-primary-500 hover:ring-primary-400':
        variant === 'primary',
      'text-neutral-600 hover:bg-neutral-50 ring-neutral-200':
        variant === 'outline',
      'font-medium text-primary-500 hover:text-primary-400': variant === 'link'
    }"
    class="flex items-center justify-center h-8 text-sm ring-1 transition-[background-color,box-shadow]"
  >
    <slot />
  </button>
</template>
