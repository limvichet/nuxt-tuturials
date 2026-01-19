<script setup lang="ts"></script>

<template>
  <footer class="bg-zinc-900 py-8">
    <div
      class="px-4 md:px-4 public-prefer:px-0 mx-auto max-w-public-prefer flex flex-col gap-4 md:flex-row md:justify-between items-center"
    >
      <h3 class="text-white">
        &copy; 2025 រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ
        <span class="text-public-red">fff</span>.
      </h3>
      <ul
        class="flex items-center gap-4 md:gap-6 text-white *:duration-200 *:hover:text-public-red"
      >
              <li>
                <NuxtLink to="/" active-class="text-public-red bg-zinc-50" class="block w-full py-3 px-4 rounded-xl transition duration-200 hover:bg-zinc-100 hover:text-public-red">
                  ទំព័រដើម
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" active-class="text-public-red bg-zinc-50" class="block w-full py-3 px-4 rounded-xl transition duration-200 hover:bg-zinc-100 hover:text-public-red">
                  សេវាកម្ម
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" active-class="text-public-red bg-zinc-50" class="block w-full py-3 px-4 rounded-xl transition duration-200 hover:bg-zinc-100 hover:text-public-red">
                  អំពីយើង
                </NuxtLink>
              </li>
      </ul>
    </div>
  </footer>
</template>
