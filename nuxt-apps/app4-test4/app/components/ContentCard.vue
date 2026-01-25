<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <div class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover object-fill"
    />

    <div class="p-5 space-y-3">
      <h3 class="text-lg font-semibold">
        {{ title }}
      </h3>

      <p class="text-gray-600 text-sm">
        {{ description }}
      </p>

      <!-- Append id to link -->
      <NuxtLink
        :to="`${link}/${id}`"
        class="inline-block text-blue-600 font-medium hover:underline"
      >
        Read more →
      </NuxtLink>
    </div>
  </div>
</template>
