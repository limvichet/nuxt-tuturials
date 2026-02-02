<script setup lang="ts">
    const { navItems } = useSiteMenu();
    const mobileMenuOpen = ref(false);
</script>

<template>
          <nav class="bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold gradient-text cursor-pointer">
                            WriterPortfolio
                        </span>
                    </div>

                    <div class="hidden md:flex items-center space-x-8">
                        <template v-for="item in navItems" :key="item.id">
                            <NuxtLink :to="item.path"
                                class="nav-link text-gray-300 hover:text-emerald-400 transition-all duration-300">
                                {{ item.label }}
                            </NuxtLink>
                        </template>
                    </div>

                    <div class="md:hidden flex items-center">
                        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-400 p-2">
                            <span class="sr-only">Open menu</span>
                            <div class="space-y-2">
                                <span class="block w-8 h-0.5 bg-gray-400"></span>
                                <span class="block w-8 h-0.5 bg-gray-400"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <transition name="slide-fade">
                <div v-if="mobileMenuOpen" class="md:hidden bg-[#0f172a] border-b border-gray-800">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <NuxtLink v-for="item in navItems" :key="item.id" :to="item.path"
                            class="block px-3 py-3 text-gray-300 hover:bg-gray-800 rounded-lg"
                            @click="mobileMenuOpen = false">
                            {{ item.label }}
                        </NuxtLink>
                    </div>
                </div>
            </transition>
        </nav>
</template>