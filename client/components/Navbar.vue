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
            <div class="w-[24rem]">
              <div class="flex items-center h-10 px-4 border-b border-b-neutral-200">
                <p class="text-sm text-neutral-600">Notification</p>
              </div>
              <div class="h-[400px] max-h-[400px]">
                <ul>
                  <li class="flex p-4 space-x-4">
                    <span class="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                      <Icon name="lucide:circle-check" size="24" class="text-emerald-500" />
                    </span>
                    <div class="flex items-center min-h-8">
                      <p class="text-sm">Lucas à complété sa séance du jour.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </Popover>
        <Popover>
          <Button variant="outline" size="icon" rounded>
            <Icon name="lucide:user-round" size="16" />
          </Button>
          <template #panel>
            <div class="w-64 p-2">
              <div class="p-2 space-y-0.5">
                <h3 class="text-sm font-medium">Marie Dubois</h3>
                <p class="text-sm text-neutral-600">marie.dubois@outlook.com</p>
              </div>
              <div class="space-y-2">
                <ul>
                  <li>
                    <NuxtLink
                      to="/"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Tableau de bord</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Paramètres du compte</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Ajouter un enfant</span>
                      <Icon name="lucide:circle-plus" size="14" />
                    </NuxtLink>
                  </li>
                </ul>
                <hr class="border-neutral-200" />
                <ul>
                  <li>
                    <NuxtLink
                      to="/"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Se déconnecter</span>
                      <Icon name="lucide:log-out" size="14" />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </Popover>
      </ul>
    </nav>
  </header>
</template>
