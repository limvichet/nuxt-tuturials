<script setup lang="ts">
import { articles } from '~/data/store';

const route = useRoute();
// const { activeItem } = useArticle();

// 1. Data Resolution: Find article from state or static data
// const article = computed(() => 
//   activeItem.value ?? articles.find(a => String(a.id) === route.params.id)
// );
const article = computed(() => articles.find(a => String(a.id) === route.params.id));

useHead({title: 'Article'});
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white py-12 md:py-20 px-4">
    <div class="max-w-4xl mx-auto">
      
      <template v-if="article">
        <article class="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          <header class="mb-8">
            <div class="flex flex-wrap items-center gap-4 mb-6">
              <span class="badge-emerald">{{ article.category }}</span>
              <time :datetime="article.date" class="text-gray-500 text-sm italic">
                {{ article.date }}
              </time>
              <span class="publication-tag">{{ article.publication }}</span>
            </div>

            <h1 class="text-display">
              {{ article.title }}
            </h1>
          </header>

          <section class="card-glass">
            <blockquote class="text-xl text-gray-300 leading-relaxed mb-8 italic border-l-4 border-emerald-500 pl-6">
              "{{ article.excerpt }}"
            </blockquote>

            <div class="prose prose-invert max-w-none text-gray-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
        </article>
      </template>

      <div v-else class="text-center py-20 border border-dashed border-gray-800 rounded-3xl">
        <h2 class="text-3xl font-bold text-gray-600">Article not found</h2>
        <NuxtLink to="/" class="mt-4 inline-block text-emerald-400 hover:text-emerald-300 transition-colors">
          Return to safety
        </NuxtLink>
      </div>

      <footer class="mt-12 pt-8 border-t border-gray-900">
        <NuxtLink to="/" class="nav-back-link group">
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </NuxtLink>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css"; 
.badge-emerald {
  @apply px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/20;
}

.publication-tag {
  @apply text-amber-400 text-sm font-bold uppercase tracking-widest px-2 border-l border-gray-700;
}

.text-display {
  @apply text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent;
}

.card-glass {
  @apply bg-gray-800/30 p-8 md:p-12 rounded-3xl border border-gray-700/50 backdrop-blur-sm;
}

.nav-back-link {
  @apply inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors;
}
</style>