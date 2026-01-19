<template>
  <footer class="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-6 transition-colors duration-300">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      
      <div class="text-sm text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }} <span class="font-bold text-blue-600">Nuxt Mini Project</span>.
      </div>

      <div class="flex items-center gap-6">
        <a href="#" class="text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
          <Icon name="i-simple-icons-github" class="w-5 h-5" />
        </a>
        <a href="#" class="text-gray-400 hover:text-blue-400 dark:hover:text-white transition-colors">
          <Icon name="i-simple-icons-x" class="w-5 h-5" />
        </a>
      </div>

      <p class="text-xs text-gray-400 dark:text-gray-500 italic">
        Built with Nuxt 4 & Tailwind v4
      </p>
    </div>
  </footer>
</template>