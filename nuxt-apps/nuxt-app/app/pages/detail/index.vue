<template>
  <div class="max-w-6xl mx-auto space-y-8 animate-fade-in">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
      <div>
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">បញ្ជីព័ត៌មានលម្អិត</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-400">ស្វែងរក និងគ្រប់គ្រងទិន្នន័យរបស់អ្នក</p>
      </div>
      
      <div class="relative w-full md:w-80">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="ស្វែងរកតាមឈ្មោះ..." 
          class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
        />
        <span class="absolute left-3 top-3 text-gray-400">
          <Icon name="i-heroicons-magnifying-glass" class="h-5 w-5" />
        </span>
      </div>
    </div>

    <div v-if="pending" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="n in 3" :key="n" class="bg-gray-200 dark:bg-gray-800 animate-pulse h-48 rounded-2xl"></div>
    </div>

    <div v-else-if="filteredItems.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="item in filteredItems" 
        :key="item.id"
        class="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
            #{{ item.id }}
          </div>
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
            សកម្ម
          </span>
        </div>

        <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-2">{{ item.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 italic text-sm">{{ item.description }}</p>
        
        <NuxtLink 
          :to="`/detail/${item.id}`" 
          class="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 group-hover:underline"
        >
          មើលបន្ថែម
          <Icon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </div>

    <div v-else class="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
      <Icon name="i-heroicons-exclamation-circle" class="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p class="text-gray-500 dark:text-gray-400 text-lg">មិនមានទិន្នន័យដែលអ្នកស្វែងរកទេ!</p>
    </div>

  </div>
</template>

<script setup>
const searchQuery = ref('')
const pending = ref(true)

// ទិន្នន័យគំរូ
const items = [
  { id: 101, title: 'Nuxt 4 Structure', description: 'ការរៀបចំ Folder ក្នុងថត app/ ថ្មីស្រឡាង។' },
  { id: 102, title: 'Tailwind Mastery', description: 'តិចនិកប្រើប្រាស់ Utility Classes ឱ្យមានប្រសិទ្ធភាព។' },
  { id: 103, title: 'Server Engine', description: 'Nitro Engine ជួយឱ្យ API ដើរលឿនដូចផ្លេកបន្ទោរ។' },
]

// SEO setup
useSeoMeta({
  title: 'បញ្ជីព័ត៌មាន - Nuxt 4',
  description: 'ស្វែងរកព័ត៌មានលម្អិតអំពី Nuxt 4 និង Tailwind CSS'
})

// Simulation loading 
onMounted(() => {
  setTimeout(() => pending.value = false, 800)
})

const filteredItems = computed(() => {
  return items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>