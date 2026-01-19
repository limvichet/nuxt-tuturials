<template>
  <header class="bg-blue-600 dark:bg-gray-950 text-white shadow-md p-4 sticky top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto flex justify-between items-center">
      
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="p-1 rounded-xl bg-white/10 transition-transform group-hover:scale-110">
          <img src="/logo.png" alt="Logo" class="h-8 w-8 object-contain" />
        </div>
        <span class="text-xl font-bold tracking-tight">Nuxt 4</span>
      </NuxtLink>

      <nav class="flex items-center space-x-6">
        <NuxtLink to="/" class="hover:text-blue-200" active-class="text-blue-200 underline">Home</NuxtLink>
        <NuxtLink to="/detail" class="hover:text-blue-200" active-class="text-blue-200 underline">Detail</NuxtLink>
        
        <div class="border-l border-white/20 pl-4">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </header>
</template>