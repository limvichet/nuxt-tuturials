<script setup>
const menuItems = [
  { name: 'Home Page', path: '/', icon: 'i-heroicons-home' },
  { name: 'Detail List', path: '/detail', icon: 'i-heroicons-list-bullet' },
]
</script>

<template>
  <aside class="w-64 hidden md:flex flex-col bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="p-6">
      <h3 class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
        Main Menu
      </h3>
      
      <nav class="space-y-1">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-600 dark:text-gray-400"
          active-class="bg-blue-600 !text-white shadow-lg shadow-blue-200 dark:shadow-none font-semibold"
        >
          <Icon :name="item.icon" class="w-5 h-5" />
          <span>{{ item.name }}</span>
        </NuxtLink>
      </nav>
    </div>

    <div class="mt-auto p-6">
      <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
        <p class="text-xs text-gray-500 dark:text-gray-400">Need help? Check the Nuxt 4 documentation.</p>
      </div>
    </div>
  </aside>
</template>