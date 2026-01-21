<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 left-0 right-0 z-50 w-full bg-zinc-100/70 shadow backdrop-blur-lg">
    <nav class="mx-auto max-w-7xl px-4 py-2 transition-all duration-300">
      <div class="flex items-center justify-between">
        
        <NuxtLink to="/" class="flex items-center">
          <div class="w-10 md:w-10"> 
            <svg 
              viewBox="0 0 7 5" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-full h-auto text-public-red"
            >
              <path
                d="M1.29 9.53674e-07H1.866C1.89 0.0040009 1.902 0.0200009 1.902 0.0480011V0.414001C1.902 0.442001 1.886 0.456001 1.854 0.456001H1.608C1.44 0.456001 1.356 0.530001 1.356 0.678001V4.338H0.989999C0.813999 4.338 0.679999 4.294 0.587999 4.206C0.499999 4.118 0.455999 4.006 0.455999 3.87V1.8H0.149999C0.0499993 1.8 -6.66827e-07 1.74 -6.66827e-07 1.62V1.338H0.455999V0.786001C0.455999 0.494001 0.521999 0.290001 0.653999 0.174001C0.785999 0.058001 0.997999 9.53674e-07 1.29 9.53674e-07ZM1.908 1.338V1.62C1.908 1.74 1.858 1.8 1.758 1.8H1.488V1.338H1.908ZM3.37008 9.53674e-07H3.94608C3.97008 0.0040009 3.98208 0.0200009 3.98208 0.0480011V0.414001C3.98208 0.442001 3.96608 0.456001 3.93408 0.456001H3.68808C3.52008 0.456001 3.43608 0.530001 3.43608 0.678001V4.338H3.07008C2.89408 4.338 2.76008 4.294 2.66808 4.206C2.58008 4.118 2.53608 4.006 2.53608 3.87V1.8H2.23008C2.13008 1.8 2.08008 1.74 2.08008 1.62V1.338H2.53608V0.786001C2.53608 0.494001 2.60208 0.290001 2.73408 0.174001C2.86608 0.058001 3.07808 9.53674e-07 3.37008 9.53674e-07ZM3.98808 1.338V1.62C3.98808 1.74 3.93808 1.8 3.83808 1.8H3.56808V1.338H3.98808ZM5.45016 9.53674e-07H6.02616C6.05016 0.0040009 6.06216 0.0200009 6.06216 0.0480011V0.414001C6.06216 0.442001 6.04616 0.456001 6.01416 0.456001H5.76816C5.60016 0.456001 5.51616 0.530001 5.51616 0.678001V4.338H5.15016C4.97416 4.338 4.84016 4.294 4.74816 4.206C4.66016 4.118 4.61616 4.006 4.61616 3.87V1.8H4.31016C4.21016 1.8 4.16016 1.74 4.16016 1.62V1.338H4.61616V0.786001C4.61616 0.494001 4.68216 0.290001 4.81416 0.174001C4.94616 0.058001 5.15816 9.53674e-07 5.45016 9.53674e-07ZM6.06816 1.338V1.62C6.06816 1.74 6.01816 1.8 5.91816 1.8H5.64816V1.338H6.06816Z" />
            </svg>
          </div>
        </NuxtLink>

        <ul class="hidden md:flex items-center gap-8 font-semibold text-gray-600">
          <li><NuxtLink to="/" active-class="text-public-red" class="transition hover:text-public-red">ទំព័រដើម</NuxtLink></li>
          <li><NuxtLink to="/services" active-class="text-public-red" class="transition hover:text-public-red">សេវាកម្ម</NuxtLink></li>
          <li><NuxtLink to="/about" active-class="text-public-red" class="transition hover:text-public-red">អំពីយើង</NuxtLink></li>
        </ul>

        <div class="hidden md:flex items-center gap-4 font-semibold">
          <NuxtLink to="/login" class="bg-transparent py-3 px-4 rounded-lg hover:bg-gray-200 transition">ចូលគណនី</NuxtLink>
          <NuxtLink to="/app/dashboard" class="text-white bg-public-red py-3 px-4 rounded-lg hover:bg-public-red/60 transition">ប្រើប្រាស់ឥឡូវនេះ</NuxtLink>
        </div>

        <button @click="toggleMenu" class="block md:hidden text-black z-[60] relative transition-transform duration-300 active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h18M4 18h18" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="-translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-full opacity-0"
      >
        <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50">
          <div class="px-4 py-8 space-y-4">
            
            <ul class="flex flex-col font-semibold text-lg text-zinc-900">
              <li>
                <NuxtLink to="/" active-class="text-public-red bg-zinc-50" class="block w-full py-3 px-4 rounded-xl transition duration-200 hover:bg-zinc-100 hover:text-public-red" @click="isMenuOpen = false">
                  ទំព័រដើម
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" active-class="text-public-red bg-zinc-50" class="block w-full py-3 px-4 rounded-xl transition duration-200 hover:bg-zinc-100 hover:text-public-red" @click="isMenuOpen = false">
                  សេវាកម្ម
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" active-class="text-public-red bg-zinc-50" class="block w-full py-3 px-4 rounded-xl transition duration-200 hover:bg-zinc-100 hover:text-public-red" @click="isMenuOpen = false">
                  អំពីយើង
                </NuxtLink>
              </li>
            </ul>
            
            <div class="h-px bg-zinc-100 mx-4"></div>

            <div class="flex flex-col gap-3 font-semibold px-2">
              <NuxtLink to="/login" class="py-4 text-center rounded-xl hover:bg-zinc-100 transition active:bg-zinc-200" @click="isMenuOpen = false">
                ចូលគណនី
              </NuxtLink>
              <NuxtLink to="/app/dashboard" class="text-white bg-public-red py-4 text-center rounded-xl shadow-lg shadow-public-red/20 hover:bg-public-red/90 transition active:scale-95" @click="isMenuOpen = false">
                ប្រើប្រាស់ឥឡូវនេះ
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>