<script setup lang="ts">
    import { useMobileMenu } from '@/composables/useMobileMenu'
    const { isMenuOpen } = useMobileMenu()
</script>

<template>
    <header class="sticky top-0 z-50 bg-black/85 backdrop-blur-md text-white py-3">
        <div class="max-w-[1000px] mx-auto px-5 flex justify-between items-center relative z-50">
            <h1 class="text-xl font-semibold tracking-tight">Apple Store</h1>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-6">
                <a class="nav-link text-[0.85rem] opacity-80 hover:opacity-100 cursor-pointer">Store</a>
                <a class="nav-link text-[0.85rem] opacity-80 hover:opacity-100 cursor-pointer">Mac</a>
                <a class="nav-link text-[0.85rem] opacity-80 hover:opacity-100 cursor-pointer">iPhone</a>
                <a class="nav-link text-[0.85rem] opacity-80 hover:opacity-100 cursor-pointer">Support</a>
            </nav>

            <!-- Mobile Hamburger / X -->
            <div class="md:hidden flex items-center relative z-50">
                <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none relative z-50">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <transition name="menu-slide">
        <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-black/90 text-white overflow-y-auto"
            @click="isMenuOpen = false">
            <div class="flex flex-col items-center justify-start py-20 space-y-6 px-5 min-h-screen" @click.stop>
                <a @click="isMenuOpen = false" class="cursor-pointer hover:underline text-xl">Store</a>
                <a @click="isMenuOpen = false" class="cursor-pointer hover:underline text-xl">Mac</a>
                <a @click="isMenuOpen = false" class="cursor-pointer hover:underline text-xl">iPhone</a>
                <a @click="isMenuOpen = false" class="cursor-pointer hover:underline text-xl">Support</a>
            </div>
        </div>
    </transition>
</template>