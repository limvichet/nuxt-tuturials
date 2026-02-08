<script setup>

import { articles } from "~/data/store";

</script>

<template>
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
                            <span class="px-3 py-1 bg-gray-900/50 text-emerald-400 rounded-full text-xs font-medium">
                                {{ article.category }}
                            </span>
                            <span class="text-xs text-gray-500">{{ article.date }}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">
                            {{ article.title }}
                        </h3>
                        <p class="text-gray-400 text-sm mb-6 leading-relaxed">{{ article.excerpt }}</p>
                        <div class="pt-4 border-t border-gray-700/50 flex justify-between items-center">
                            <span class="text-amber-400 text-xs font-semibold uppercase tracking-wider">{{
                                article.publication }}</span>
                            <NuxtLink :to="`/articles/${article.id}`"
                                class="text-blue-400 text-sm cursor-pointer flex items-center group-hover:translate-x-1 transition-transform">
                                Read More →
                            </NuxtLink>

                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>

</template>
