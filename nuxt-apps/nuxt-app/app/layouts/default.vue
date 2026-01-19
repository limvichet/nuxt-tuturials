<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-750 dark:text-gray-100 transition-colors duration-300">
    <Header />

    <div class="flex flex-1 overflow-hidden">
      <Sidebar />

      <main class="flex-1 bg-white dark:bg-gray-900 p-8 transition-colors">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>
    </div>

    <Footer />
  </div>
</template>