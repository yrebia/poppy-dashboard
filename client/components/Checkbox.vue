<script setup lang="ts">
const props = defineProps<{
  id?: string
  label?: string
  modelValue?: boolean
}>()

const id = props.id ?? useId()
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="relative flex">
      <input
        :id="id"
        type="checkbox"
        @input="
          $emit(
            'update:modelValue',
            ($event.target as HTMLInputElement).checked
          )
        "
        :class="{
          'bg-primary-500 ring-primary-500': modelValue,
          'ring-neutral-200': !modelValue
        }"
        class="w-4 h-4 rounded ring-1 appearance-none cursor-pointer transition-[background-color,box-shadow]"
      />
      <Icon
        name="lucide:check"
        size="14"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white"
      />
    </div>
    <label v-if="label" :for="id" class="text-sm font-medium">
      {{ label }}
    </label>
  </div>
</template>
