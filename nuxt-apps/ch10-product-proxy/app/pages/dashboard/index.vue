<script setup lang="ts">
  definePageMeta({ 
    layout: "dashboard",
    requiresAuth: true,
  })

  useHead({
    title: "Dashboard - Product Management",
    meta: [
      { 
        name: 'description', 
        content: 'Manage your products in the dashboard.' 
      }
    ]
  });
</script>



<template>
  <div class="flex flex-col gap-4">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="aspect-video rounded-xl bg-muted/50 border" />
      <div class="aspect-video rounded-xl bg-muted/50 border" />
      <div class="aspect-video rounded-xl bg-muted/50 border" />
    </div>
    <div class="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min border" />
  </div>
</template>
