<script setup>
  const route = useRoute()
  const id = route.params.id
</script>

<template>
  <div>
    <h2>Detail ID: {{ $route.params.id }}</h2>
    <p>This is a dynamic page for item #{{ id }}</p>
    
    <NuxtLink to="/">Back to Home</NuxtLink>
  </div>
</template>
