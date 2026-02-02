<template>
    <div class="bg-[#0f172a] text-gray-100 min-h-screen font-sans selection:bg-emerald-500/30">
        <nav class="bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold gradient-text cursor-pointer">
                            WriterPortfolio
                        </span>
                    </div>

                    <div class="hidden md:flex items-center space-x-8">
                        <template v-for="item in navItems" :key="item.to">
                            <NuxtLink :to="item.to"
                                class="nav-link text-gray-300 hover:text-emerald-400 transition-all duration-300">
                                {{ item.name }}
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
                        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
                            class="block px-3 py-3 text-gray-300 hover:bg-gray-800 rounded-lg"
                            @click="mobileMenuOpen = false">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </div>
            </transition>
        </nav>

        <main>
            <section class="relative py-24 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10">
                </div>
                <div class="relative max-w-4xl mx-auto px-4 text-center">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                        <span class="gradient-text">Words That Matter</span>
                    </h1>
                    <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Crafting compelling narratives and insightful articles that engage, inform, and inspire.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <button
                            class="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-xl font-medium transition-transform hover:scale-105 shadow-lg shadow-emerald-900/20">
                            Read My Work
                        </button>
                        <button
                            class="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-xl transition-all">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            <section id="articles" class="py-20 bg-gray-900/30">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4 gradient-text">Published Articles</h2>
                        <p class="text-gray-400">Featured works across various publications</p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article v-for="article in articles" :key="article.title"
                            class="article-card group bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                            <div class="flex justify-between items-start mb-4">
                                <span
                                    class="px-3 py-1 bg-gray-900/50 text-emerald-400 rounded-full text-xs font-medium">
                                    {{ article.category }}
                                </span>
                                <span class="text-xs text-gray-500">{{ article.date }}</span>
                            </div>
                            <h3
                                class="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">
                                {{ article.title }}
                            </h3>
                            <p class="text-gray-400 text-sm mb-6 leading-relaxed">{{ article.excerpt }}</p>
                            <div class="pt-4 border-t border-gray-700/50 flex justify-between items-center">
                                <span class="text-amber-400 text-xs font-semibold uppercase tracking-wider">{{
                                    article.publication }}</span>
                                <a href="#"
                                    class="text-blue-400 text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                    Read More →
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>

        <footer class="border-t border-gray-800/50 py-12 bg-[#0f172a]">
            <div class="max-w-6xl mx-auto px-4 text-center md:text-left grid md:grid-cols-3 gap-8 items-center">
                <div>
                    <span class="text-2xl font-bold gradient-text">WriterPortfolio</span>
                    <p class="text-gray-400 mt-2 text-sm">© 2026 Writer Portfolio.</p>
                </div>
                <div class="flex justify-center space-x-6 text-gray-400">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Articles', to: '#articles' },
    { name: 'About', to: '#about' },
    { name: 'Contact', to: '#contact' },
];
const articles = [
    {
        title: "The Future of AI in Creative Writing",
        category: "Technology",
        date: "May 15, 2024",
        excerpt: "Exploring how artificial intelligence is transforming the landscape of creative content creation.",
        publication: "Tech Insights"
    },
    {
        title: "Minimalism in the Digital Age",
        category: "Lifestyle",
        date: "Apr 22, 2024",
        excerpt: "Finding balance and simplicity in an increasingly connected and complex digital world.",
        publication: "Modern Living"
    },
    {
        title: "Minimalism in the Digital Age",
        category: "Lifestyle",
        date: "Apr 22, 2024",
        excerpt: "Finding balance and simplicity in an increasingly connected and complex digital world.",
        publication: "Modern Living"
    },
    // Add more articles here...
];
</script>

<style scoped>
@reference "@/assets/css/main.css";

.gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500;
}

.nav-link {
    position: relative;
}

.nav-link::after {
    content: '';
    @apply absolute w-0 h-[2px] -bottom-1 left-0 bg-current transition-all duration-300;
}

.nav-link:hover::after {
    @apply w-full;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500;
}

.article-card:hover {
    transform: translateY(-8px);
    @apply shadow-2xl shadow-emerald-500/5;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
}
</style>