<template>
  <div>
    <Navbar />
    <main>
      <div class="h-[calc(100vh-64px)] py-6 bg-neutral-50">
        <div class="flex items-center max-w-6xl h-28 px-6 mx-auto">
          <h1 class="text-4xl font-semibold">Paramètres du compte</h1>
        </div>
        <hr class="border-neutral-200" />
        <div class="flex max-w-6xl px-6 py-12 mx-auto">
          <nav class="w-60 mr-12">
            <ul>
              <li>
                <NuxtLink
                  to="/settings"
                  class="flex items-center h-8 px-2 text-sm rounded transition-colors hover:bg-neutral-200 text-neutral-600"
                >
                  Général
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/settings/childs"
                  class="flex items-center h-8 px-2 text-sm rounded transition-colors hover:bg-neutral-200 text-neutral-600"
                >
                  Enfants
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <section class="flex-1">
            <slot />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
a.router-link-exact-active {
  font-weight: 500;
  color: rgb(23 23 23);
}
</style>
