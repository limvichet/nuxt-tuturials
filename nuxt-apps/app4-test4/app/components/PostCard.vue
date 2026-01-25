<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    })
</script>

<template>
  <div class="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    <h2 class="text-2xl font-extrabold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
      {{ title }}
    </h2>
    <p class="text-gray-700 text-base leading-relaxed">
      {{ content }}
    </p>
  </div>
</template>



