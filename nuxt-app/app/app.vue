<script setup>
  import { ref } from 'vue'
  const currentPage = ref('home')
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-blue-500 text-white p-4">
      <h1>Nuxt SPA Example</h1>
    </header>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-48 bg-gray-100 p-4">
        <ul>
          <li class="mb-2">
            <button @click="currentPage = 'home'" class="text-blue-600 hover:underline">
              Home
            </button>
          </li>
          <li>
            <button @click="currentPage = 'detail'" class="text-blue-600 hover:underline">
              Detail
            </button>
          </li>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4">
        <!-- Home Page -->
        <div v-if="currentPage === 'home'">
          <h2 class="text-2xl font-bold mb-4">Home Page</h2>
          <p>Welcome to the Home Page!</p>
          <button @click="currentPage = 'detail'"
            class="cursor-pointer mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Goto Detail Page
          </button>
        </div>

        <!-- Detail Page -->
        <div v-if="currentPage === 'detail'">
          <h2 class="text-2xl font-bold mb-4">Detail Page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem nemo ipsam corporis a qui, nostrum quia adipisci nesciunt officia.</p>
          <button @click="currentPage = 'home'" class="cursor-pointer mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Goto Home Page
          </button>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4 mt-auto">
      © 2026 Nuxt Single Page
    </footer>
  </div>
</template>




