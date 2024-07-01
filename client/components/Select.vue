<script setup lang="ts">
import { capitalize } from 'vue'

const value = defineModel<string>()

defineProps<{
  name?: string
  options?: { value: string; onClick?: () => void }[]
  placeholder?: string
}>()
</script>

<template>
  <HeadlessListbox v-model="value" as="div" class="relative h-8">
    <HeadlessListboxButton
      class="flex items-center justify-between w-full h-full px-2 rounded-md ring-1 hover:bg-neutral-50 ring-neutral-200 transition-colors"
    >
      <span
        v-if="placeholder && !options?.some((option) => option.value === value)"
        class="block text-sm font-medium truncate text-neutral-600"
        >{{ placeholder }}</span
      >
      <span v-else class="block text-sm font-medium truncate">{{
        value ? capitalize(value) : ''
      }}</span>
      <Icon
        name="lucide:chevrons-up-down"
        size="14"
        class="min-w-3 mx-1 text-neutral-600"
      />
    </HeadlessListboxButton>
    <Transition
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 -translate-y-1"
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
    >
      <HeadlessListboxOptions
        class="absolute w-full max-h-60 p-1 mt-2 rounded-md ring-1 shadow-md overflow-auto bg-white ring-neutral-200"
      >
        <p v-if="name" class="p-2 text-xs text-neutral-600">{{ name }}</p>
        <HeadlessListboxOption
          v-for="option in options"
          v-slot="{ active, selected }"
          :key="option.value"
          :value="option.value"
          as="template"
        >
          <li
            @click="option.onClick ? option.onClick() : () => {}"
            :class="{ 'bg-neutral-100': active }"
            class="flex items-center justify-between h-8 px-2 py-1 rounded cursor-pointer transition-colors"
          >
            <span class="text-sm">{{ capitalize(option.value) }}</span>
            <Icon
              v-if="selected"
              name="lucide:check"
              size="14"
              class="text-neutral-600"
            />
          </li>
        </HeadlessListboxOption>
        <slot name="trailing" />
      </HeadlessListboxOptions>
    </Transition>
  </HeadlessListbox>
</template>
