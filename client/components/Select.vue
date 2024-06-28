<script setup lang="ts">
const value = defineModel<string>({
  required: true
})

defineProps<{
  name?: string
  options?: string[]
}>()
</script>

<template>
  <HeadlessListbox v-model="value" as="div" class="relative h-8">
    <HeadlessListboxButton
      class="flex items-center justify-between w-full h-full px-2 rounded-md ring-1 hover:bg-neutral-50 ring-neutral-200 transition-colors"
    >
      <span class="block text-sm font-medium truncate">{{ value }}</span>
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
        <p v-if="name" class="p-2 text-xs text-neutral-500">{{ name }}</p>
        <HeadlessListboxOption
          v-for="option in options"
          v-slot="{ active, selected }"
          :key="option"
          :value="option"
          as="template"
        >
          <li
            :class="{ 'bg-neutral-100': active }"
            class="flex items-center justify-between h-8 px-2 py-1 rounded cursor-pointer transition-colors"
          >
            <span class="text-sm">{{ option }}</span>
            <Icon
              v-if="selected"
              name="lucide:check"
              size="14"
              class="text-neutral-600"
            />
          </li>
        </HeadlessListboxOption>
        <button
          class="flex items-center gap-2 text-sm w-full h-8 px-2 py-1 rounded cursor-pointer hover:bg-neutral-100 transition-colors"
        >
          <Icon name="lucide:circle-plus" size="14" class="text-primary-600" />
          <span>Ajouter un enfant</span>
        </button>
      </HeadlessListboxOptions>
    </Transition>
  </HeadlessListbox>
</template>
