<script setup lang="ts">
    const { footerLinks } = useSiteMenu();
</script>


<template>
            <footer class="border-t border-gray-800/50 py-12 bg-[#0f172a]">
            <div class="max-w-6xl mx-auto px-4 text-center md:text-left grid md:grid-cols-3 gap-8 items-center">
                <div>
                    <span class="text-2xl font-bold gradient-text">WriterPortfolio</span>
                    <p class="text-gray-400 mt-2 text-sm">© 2026 Writer Portfolio.</p>
                </div>
                <div class="flex justify-center space-x-6 text-gray-400">
                    <a v-for="link in footerLinks" :key="link.id" :href="link.path">{{ link.label }} </a>
                </div>
            </div>
        </footer>
</template>