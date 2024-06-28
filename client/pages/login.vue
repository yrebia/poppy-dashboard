<script setup lang="ts">
const rememberMe = ref(false)
</script>

<template>
  <div class="flex justify-center pt-10">
    <div class="flex flex-col items-center w-full max-w-sm mt-10">
      <NuxtLink to="/">
        <img src="/logo.png" width="64" height="64" />
      </NuxtLink>
      <div class="mt-8">
        <h1 class="text-4xl text-center font-bold">Se connecter</h1>
        <p class="mt-2 text-center text-neutral-500">
          Veuillez entrer vos informations.
        </p>
      </div>
      <div class="w-full space-y-5 mt-8">
        <Input type="email" label="Adresse email" class="w-full" />
        <Input type="password" label="Mot de passe" class="w-full" />
        <div class="flex justify-between w-full">
          <Checkbox v-model="rememberMe" label="Se souvenir de moi" />
        </div>
        <Button class="w-full">Se connecter</Button>
        <p class="text-sm text-center">
          Vous n'avez pas de compte ?
          <Button href="/register">Créer un compte</Button>
        </p>
      </div>
    </div>
  </div>
</template>
