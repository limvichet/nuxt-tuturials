<script setup>
const colorMode = useColorMode()

const themes = [
  { name: 'system', icon: 'i-heroicons-computer-desktop', label: 'System' },
  { name: 'light', icon: 'i-heroicons-sun', label: 'Light' },
  { name: 'dark', icon: 'i-heroicons-moon', label: 'Dark' }
]

const toggleTheme = () => {
  const modes = ['system', 'light', 'dark']
  const currentIndex = modes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % modes.length
  colorMode.preference = modes[nextIndex]
}
</script>

<template>
  <button 
    @click="toggleTheme"
    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all group"
    aria-label="Toggle Theme"
  >
    <Icon 
      v-if="colorMode.preference === 'system'" 
      name="i-heroicons-computer-desktop" 
      class="w-5 h-5 text-gray-600 dark:text-gray-400" 
    />
    <Icon 
      v-else-if="colorMode.preference === 'light'" 
      name="i-heroicons-sun" 
      class="w-5 h-5 text-yellow-500" 
    />
    <Icon 
      v-else 
      name="i-heroicons-moon" 
      class="w-5 h-5 text-blue-400" 
    />
  </button>
</template>