<script setup lang="ts">

import type { PostItem } from '~/types/post'

const posts: PostItem[] = [
  {
    title: "My First Post",
    content: "This is a simple post content using props in Nuxt 4."
  },
  {
    title: "Another Post",
    content: "Props make it easy to pass data from parent to child components."
  },
  {
    title: "Yet Another Post",
    content: "You can reuse the PostCard component multiple times without duplicating code."
  }
]

</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Header -->
    <header class="bg-gray-600 text-white py-6 shadow-md">
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold">My Blog</h1>
        <nav class="space-x-4">
          <a href="#" class="hover:text-gray-200 transition-colors">Home</a>
          <a href="#" class="hover:text-gray-200 transition-colors">About</a>
          <a href="#" class="hover:text-gray-200 transition-colors">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Main content with responsive sidebar -->
    <div class="max-w-6xl mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">
      
      <!-- Posts (left) -->
      <main class="flex-1 space-y-6">
          <PostCard
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :content="post.content"
          />
      </main>


      <!-- Sidebar (right) hidden on small screens -->
      <aside class="hidden lg:block w-80 flex-shrink-0 space-y-6">
        <!-- About -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">About Me</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Hi! I am Vichet, a web developer. I love building Nuxt and Vue projects.
          </p>
        </div>

        <!-- Categories -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">Categories</h3>
          <ul class="space-y-2 text-gray-700">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Web Development</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Nuxt.js</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Tailwind CSS</a></li>
          </ul>
        </div>

        <!-- Recent Posts -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">Recent Posts</h3>
          <ul class="space-y-2 text-gray-700">
            <li><a href="#" class="hover:text-blue-600 transition-colors">My First Post</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Another Post</a></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</template>