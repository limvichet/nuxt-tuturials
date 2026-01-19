<template>
  <div class="overflow-hidden bg-transparent">
    <section class="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div class="relative z-10 animate-fade-in-up">
        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Welcome to <span class="text-blue-600 dark:text-blue-400 italic">Nuxt 4</span>
        </h1>
        <p class="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          បទពិសោធន៍ថ្មីនៃការសរសេរកូដដែលមានរបៀបរៀបរយជាងមុន ជាមួយរចនាសម្ព័ន្ធថត 
          <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono text-sm">app/</code> ថ្មីស្រឡាង។
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink 
            to="/detail" 
            class="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Explore Details
          </NuxtLink>
          <a 
            href="https://nuxt.com/docs/guide/future/compatibility#compatibility-version-4" 
            target="_blank"
            class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-8 mt-12 px-4">
      <div 
        v-for="(feature, index) in features" 
        :key="index"
        class="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-500 animate-slide-in"
        :style="{ animationDelay: `${index * 150}ms` }"
      >
        <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-2xl mb-4">
          {{ feature.icon }}
        </div>
        <h3 class="font-bold text-xl mb-2 text-gray-900 dark:text-white">{{ feature.title }}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ feature.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Nuxt 4 uses auto-imports for everything, no need to import ref or computed
const features = [
  { icon: '🚀', title: 'Fast Performance', desc: 'ប្រើប្រាស់ Nitro Engine ជំនាន់ចុងក្រោយសម្រាប់ល្បឿនលឿនបំផុត។' },
  { icon: '📁', title: 'App Directory', desc: 'រៀបចំ Components, Pages, និង Assets ក្នុងថតតែមួយយ៉ាងមានរបៀប។' },
  { icon: '✨', title: 'Auto Imports', desc: 'មិនបាច់ចំណាយពេល Import កូដដោយផ្ទាល់ នាំឱ្យកូដខ្លី និងស្អាត។' }
]

useSeoMeta({
  title: 'Welcome to Nuxt 4',
  description: 'Learning Nuxt 4 with Tailwind CSS and Dark Mode.'
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slide-in {
  opacity: 0;
  animation: slideIn 0.6s ease-out forwards;
}
</style>