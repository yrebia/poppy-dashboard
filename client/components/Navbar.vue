<script setup lang="ts">
const route = useRoute()

const child = ref(route.params.name as string)

watch(
  () => route.params.name,
  (name) => {
    child.value = name ? (name as string) : ''
  }
)
</script>

<template>
  <header
    class="flex items-center h-16 px-6 bg-white border-b border-neutral-200"
  >
    <NuxtLink to="/dashboard">
      <NuxtImg src="/logo.png" width="40" />
    </NuxtLink>
    <nav class="flex flex-1 items-center justify-between h-16 pl-6">
      <Select
        v-model="child"
        name="Enfants"
        placeholder="Choisir un enfant..."
        :options="[
          {
            value: 'lucas',
            onClick: () => navigateTo('/dashboard/child/lucas')
          },
          {
            value: 'mathieu',
            onClick: () => navigateTo('/dashboard/child/mathieu')
          }
        ]"
        class="w-52"
      >
        <template #trailing>
          <button
            @click="navigateTo('/dashboard/child/new')"
            class="flex items-center gap-2 text-sm w-full h-8 px-2 py-1 rounded cursor-pointer hover:bg-neutral-100 transition-colors"
          >
            <Icon
              name="lucide:circle-plus"
              size="14"
              class="text-primary-600"
            />
            <span>Ajouter un enfant</span>
          </button>
        </template>
      </Select>
      <ul class="flex flex-initial items-center gap-2.5">
        <Popover>
          <Button variant="outline" size="icon" rounded>
            <Icon name="lucide:bell" size="16" />
          </Button>
          <template #panel>
            <div class="flex flex-col w-[24rem]">
              <div
                class="flex items-center h-10 px-4 border-b border-b-neutral-200"
              >
                <p class="text-sm text-neutral-600">Notification</p>
              </div>
              <div class="h-[400px] max-h-[400px] overflow-auto">
                <ul>
                  <li class="relative border-b border-b-neutral-200">
                    <NuxtLink
                      to="/"
                      class="flex p-4 space-x-4 transition-colors hover:bg-neutral-50"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 rounded-full ring-1 ring-emerald-100 bg-emerald-50"
                      >
                        <Icon
                          name="lucide:circle-check"
                          size="20"
                          class="text-emerald-600"
                        />
                      </span>
                      <div
                        class="flex flex-col flex-1 justify-center min-h-8 text-sm leading-tight"
                      >
                        <p>Lucas à complété sa séance du jour.</p>
                        <p class="text-neutral-600">il y a 1h</p>
                      </div>
                    </NuxtLink>
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
            <div class="w-64">
              <div class="p-4 space-y-0.5">
                <h3 class="text-sm font-medium">Marie Dubois</h3>
                <p class="text-sm text-neutral-600">marie.dubois@outlook.com</p>
              </div>
              <div class="space-y-2">
                <ul class="px-2">
                  <li>
                    <NuxtLink
                      to="/dashboard"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Tableau de bord</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/settings"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Paramètres du compte</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/dashboard/child/new"
                      class="flex items-center justify-between h-8 px-2 text-sm rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <span>Ajouter un enfant</span>
                      <Icon name="lucide:circle-plus" size="14" />
                    </NuxtLink>
                  </li>
                </ul>
                <hr class="border-neutral-200" />
                <ul class="px-2 pb-2">
                  <li>
                    <NuxtLink
                      to="/login"
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
