export default defineNuxtRouteMiddleware((_to, from) => {
  if (from.path === '/') {
    return navigateTo('/login')
  }
})
