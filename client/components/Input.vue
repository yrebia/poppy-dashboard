<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id?: string
    type?: 'text' | 'password' | 'email'
    label?: string
  }>(),
  {
    type: 'text'
  }
)

const id = props.id ?? useId()
</script>

<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-medium">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      class="w-full px-3 py-1.5 text-sm rounded-md ring-1 outline-none ring-neutral-200"
    />
  </div>
</template>
