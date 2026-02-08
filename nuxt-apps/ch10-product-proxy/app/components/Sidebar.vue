<template>
  <aside class="w-64 bg-gray-800 text-white p-4 space-y-4">

    <NuxtLink to="/dashboard" class="block">Products</NuxtLink>
    <NuxtLink to="/dashboard/create" class="block">Create Product</NuxtLink>

    <button @click="logout" class="text-red-400 mt-4">Logout</button>
  </aside>
</template>

<script setup>
const logout = async () => {
  await $fetch("/auth/api/logout", { method: "POST" })
  navigateTo("/login")
}
</script>
