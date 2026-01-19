<template>
  <div class="max-w-2xl animate-fade-in">
    <div class="mb-6">
      <NuxtLink to="/detail" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-sm font-medium">
        ← Back to List
      </NuxtLink>
    </div>
    
    <div v-if="item">
      <div class="border-l-4 border-blue-500 pl-4 mb-6">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">{{ item.title }}</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-400">អត្តសញ្ញាណប័ណ្ណលេខ: <span class="font-mono font-bold text-blue-600">#{{ item.id }}</span></p>
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed italic">
          {{ item.content }}
        </p>
      </div>
    </div>

    <div v-else class="text-center py-10">
      <h2 class="text-xl font-bold text-red-500">រកមិនឃើញទិន្នន័យឡើយ!</h2>
      <p class="text-gray-500 mt-2">ID លេខ {{ id }} មិនមានក្នុងប្រព័ន្ធទេ។</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

// ១. បង្កើតបញ្ជីទិន្នន័យ (ក្នុងជីវភាពពិត អ្នកអាចទាញពី API)
const allItems = [
  { 
    id: '101', 
    title: 'ស្វែងយល់ពី Nuxt 4', 
    content: 'Nuxt 4 គឺជា Framework ដែលជួយឱ្យការបង្កើត Website កាន់តែលឿន និងមានសណ្តាប់ធ្នាប់ល្អតាមរយៈ app/ structure ថ្មី។' 
  },
  { 
    id: '102', 
    title: 'តិចនិក Tailwind CSS', 
    content: 'Tailwind CSS ជួយឱ្យយើងរៀបចំ UI បានស្អាតដោយមិនបាច់សរសេរ CSS ច្រើន គ្រាន់តែប្រើ Utility Classes ជាការស្រេច។' 
  },
  { 
    id: '103', 
    title: 'ការប្រើប្រាស់ Server API', 
    content: 'Nitro Engine នៅក្នុង Nuxt អនុញ្ញាតឱ្យយើងបង្កើត Backend API ក្នុង Folder server/ បានយ៉ាងងាយស្រួល។' 
  },
  { 
    id: '104', 
    title: 'រៀនពី Dynamic Routes', 
    content: 'Dynamic Routes [id].vue ជួយឱ្យយើងបង្ហាញទិន្នន័យខុសៗគ្នាដោយប្រើ File តែមួយ អាស្រ័យលើ URL ដែល User ចូលមើល។' 
  }
]

// ២. ប្រើ .find() ដើម្បីស្វែងរកទិន្នន័យតាម ID
const item = computed(() => {
  return allItems.find(i => i.id === id)
})

// កំណត់ Title របស់ទំព័រតាមឈ្មោះ Item ស្វ័យប្រវត្តិ
useSeoMeta({
  title: item.value ? item.value.title : 'មិនឃើញទិន្នន័យ',
})
</script>