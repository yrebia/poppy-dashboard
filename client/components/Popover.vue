<template>
  <HeadlessPopover v-slot="{ open }" class="relative">
    <HeadlessPopoverButton as="template">
      <slot />
    </HeadlessPopoverButton>
    <Transition
      leave-active-class="transition duration-100 scale-100 ease-in"
      leave-to-class="opacity-0 -translate-y-1 scale-95"
      enter-active-class="transition duration-100 scale-100 ease-out"
      enter-from-class="opacity-0 -translate-y-1 scale-95"
    >
      <HeadlessPopoverPanel
        class="absolute right-0 z-10 mt-3 rounded-lg ring-1 shadow-lg bg-white ring-neutral-200"
      >
        <slot name="panel" />
      </HeadlessPopoverPanel>
    </Transition>
  </HeadlessPopover>
</template>
