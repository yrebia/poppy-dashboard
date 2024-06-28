<script setup lang="ts">
const child = ref('Lucas')
</script>

<template>
  <header
    class="flex items-center h-16 px-6 bg-white border-b border-neutral-200"
  >
    <NuxtLink to="/">
      <img src="/logo.png" width="40" />
    </NuxtLink>
    <nav class="flex flex-1 items-center justify-between h-16 pl-6">
      <Select
        v-model="child"
        name="Enfants"
        :options="['Lucas', 'Mathieu']"
        class="w-52"
      />
      <ul class="flex flex-initial items-center gap-2.5">
        <Popover>
          <Button variant="outline" size="icon" rounded>
            <Icon name="lucide:bell" size="16" />
          </Button>
          <template #panel>
            <div class="max-w-md p-4 space-y-4">
              <h3 class="text-lg font-semibold">Notifications</h3>
              <p class="text-sm text-neutral-500">Aucune notification</p>
            </div>
          </template>
        </Popover>
        <Button variant="outline" size="icon" rounded>
          <Icon name="lucide:user-round" size="16" />
        </Button>
      </ul>
    </nav>
  </header>
</template>
