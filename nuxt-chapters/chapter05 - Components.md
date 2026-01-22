@import "style.less"

# Components

#### 1. រចនាសម្ព័ន្ធ
**Components** គឺជាបំណែកតូចៗនៃ User Interface ដែលយើងអាចយកមកប្រើឡើងវិញបាន (Reusable)។ Components ត្រូវបានបង្កើតឡើងដោយប្រើ Vue.js instances (Single File Components) ដែលរួមមាន HTML, CSS និង JavaScript នៅក្នុងឯកសារតែមួយ (`.vue`)។

**Nuxt 4** Component របស់អ្នកត្រូវស្ថិតនៅទីតាំង៖ `app/components/`
- ឧទាហរណ៍រចនាសម្ព័ន្ធ៖
```sh
my-nuxt-app/
├── app/
│   ├── components/
│   │   ├── HelloWorld.vue
│   └── app.vue
├── nuxt.config.ts
└── package.json
```

#### 2. ការបង្កើត និងប្រើប្រាស់ Components
Nuxt 4 នៅតែរក្សាមុខងារ **Auto-import** ដែលមានន័យថាអ្នកមិនចាំបាច់សរសេរ `import` នៅក្នុង `<script>` នោះទេ។

##### ឧទាហរណ៍១ Basic Component 
- **creat** - app/components/HelloWorld.vue
  ```vue
  <template>
    <p>Hello world from Nuxt 4</p>
  </template>
  ```

- **use** - app/app.vue
  ```vue
    <template>
      <div>
        <h1>Welcome Nuxt 4</h1>
        <HelloWorld />
      </div>
    </template>
    ```

#### 3. Nested Components
អ្នកអាចបង្កើត Component នៅក្នុង Folder បន្ថែម ឈ្មោះរបស់វាត្រូវហៅតាមឈ្មោះ Folder បូកនឹងឈ្មោះ File។

ឧទាហរណ៍៖ ទីតាំង File: `app/components/base/button/Primary.vue` ឈ្មោះប្រើប្រាស់៖ `<BaseButtonPrimary />`

#### 4. Dynamic & Server Components
មានភាពងាយស្រួលក្នុងការគ្រប់គ្រងការ Render៖
- **Lazy Loading**: ប្រសិនបើចង់ឱ្យ Component Load តែពេលត្រូវការ ជួយឱ្យ Web ដំណើរការបានលឿន អ្នកគ្រាន់តែថែមពាក្យ `Lazy` ពីមុខឈ្មោះ។
ឧទាហរណ៍៖ `<LazyAppHeader />`
- **Server Components**: ប្រសិនបើអ្នកចង់ឱ្យ Component ដំណើរការតែនៅលើ Server កាត់បន្ថយ JavaScript ទៅ Client អ្នកអាចបង្កើត File ឈ្មោះ `MyComponent.server.vue` ។



#### 5. ឧទាហរណ៍ mini project Apple Store

- មានគម្រូ `index.html`
```html
  <script setup>
  import { ref, watch, onMounted } from 'vue'

  const isMenuOpen = ref(false)

  // Disable body scroll when menu is open
  watch(isMenuOpen, (val) => {
      document.body.style.overflow = val ? 'hidden' : ''
  })

  // Animate on scroll
  onMounted(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach(entry => {
                  // If the element is visible in the viewport
                  if (entry.isIntersecting) {
                      entry.target.classList.add('fade-in-on-scroll') // Trigger animation
                      observer.unobserve(entry.target) // Stop observing once animated
                  }
              })
          },
          { threshold: 0.2 } // 20% of element visible triggers animation
      )

      // Observe all elements with class "animate-on-scroll"
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
  })
  </script>

  <template>
      <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">

          <!-- Header -->
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

          <!-- Hero -->
          <section class="bg-black text-white pt-28 pb-24 text-center animate-on-scroll">
              <div class="max-w-[900px] mx-auto px-5">
                  <h2 class="text-5xl md:text-6xl font-semibold mb-6">iPhone 15 Pro</h2>
                  <p class="text-xl text-gray-400 mb-8">Titanium. So strong. So light. So Pro.</p>

                  <div class="flex justify-center gap-6 mb-12">
                      <button
                          class="bg-[#0071e3] text-white px-5 py-2 rounded-full transition transform hover:scale-105">Buy</button>
                      <button class="text-[#2997ff] hover:underline transition cursor-pointer">Learn more →</button>
                  </div>

                  <img src="/images/iphone17.png" class="transition duration-500 hover:scale-110 mx-auto max-h-[420px]" />
              </div>
          </section>

          <!-- Features -->
          <section class="py-24 animate-on-scroll delay-200">
              <div class="max-w-[1100px] mx-auto px-5 text-center">
                  <h2 class="text-4xl font-semibold mb-14">Why iPhone 15 Pro</h2>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div class="feature-card animate-on-scroll">
                          <div class="feature-icon text-5xl transition duration-500 hover:scale-125 hover:rotate-6">🛡️
                          </div>
                          <h3 class="feature-title">Titanium Design</h3>
                          <p class="feature-text">Aerospace-grade titanium makes it strong and lightweight.</p>
                      </div>
                      <div class="feature-card animate-on-scroll">
                          <div class="feature-icon text-5xl transition duration-500 hover:scale-125 hover:rotate-6">⚡
                          </div>
                          <h3 class="feature-title">A17 Pro Chip</h3>
                          <p class="feature-text">Incredible performance with amazing efficiency.</p>
                      </div>
                      <div class="feature-card animate-on-scroll">
                          <div class="feature-icon text-5xl transition duration-500 hover:scale-125 hover:rotate-6">📷
                          </div>
                          <h3 class="feature-title">Pro Camera</h3>
                          <p class="feature-text">Cinematic photos and stunning 4K Pro video.</p>
                      </div>
                  </div>
              </div>
          </section>

          <!-- Products -->
          <main class="flex-1 max-w-[1100px] mx-auto px-5 py-20 w-full animate-on-scroll delay-300">
              <h2 class="text-4xl font-semibold text-center mb-12">Featured Gear</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div
                      class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                      <img src="/images/iphone17.png" class="product-img" />
                      <h3 class="product-title">iPhone 15 Pro</h3>
                      <p class="product-price">$999</p>
                      <button class="btn-primary-sm">Buy Now</button>
                  </div>
                  <div
                      class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl opacity-70">
                      <img src="/images/macbook.png" class="product-img" />
                      <h3 class="product-title">MacBook Air M3</h3>
                      <p class="product-price">$1299</p>
                      <span class="sold-out">Sold Out</span>
                  </div>
                  <div
                      class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                      <img src="/images/airpod.png" class="product-img" />
                      <h3 class="product-title">AirPods Pro</h3>
                      <p class="product-price">$249</p>
                      <button class="btn-primary-sm">Buy Now</button>
                  </div>
              </div>
          </main>

          <!-- Footer -->
          <footer class="bg-[#f5f5f7] text-[#6e6e73] py-5 border-t border-gray-300 animate-on-scroll">
              <div class="max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row justify-between text-xs">
                  <p>© 2026 Phone Shop Inc. All rights reserved.</p>
                  <div class="flex gap-4 mt-3 md:mt-0">
                      <a class="footer-link hover:underline">Privacy</a>
                      <a class="footer-link hover:underline">Terms</a>
                      <a class="footer-link hover:underline">Sales</a>
                  </div>
              </div>
          </footer>

      </div>
  </template>


  <style scoped>
      /* Keyframes */
      @keyframes fadeUp {
          0% {
              opacity: 0;
              transform: translateY(40px);
          }

          100% {
              opacity: 1;
              transform: translateY(0);
          }
      }

      @keyframes fadeDown {
          0% {
              opacity: 0;
              transform: translateY(-20px);
          }

          100% {
              opacity: 1;
              transform: translateY(0);
          }
      }

      @keyframes fadeIn {
          0% {
              opacity: 0;
          }

          100% {
              opacity: 1;
          }
      }

      /* Animation classes */
      .fade-up {
          animation: fadeUp 1s ease-out forwards;
      }

      .fade-down {
          animation: fadeDown 0.6s ease-out forwards;
      }

      .fade-in {
          animation: fadeIn 1.5s ease-out forwards;
      }

      /* Scroll-triggered animation */
      .fade-in-on-scroll {
          animation: fadeUp 0.8s ease-out forwards;
      }

      /* Optional delays */
      .delay-200 {
          animation-delay: 0.2s;
      }

      .delay-300 {
          animation-delay: 0.3s;
      }

      .delay-500 {
          animation-delay: 0.5s;
      }

      /* Slide-down animation for mobile menu */
      .menu-slide-enter-active,
      .menu-slide-leave-active {
          transition: max-height 0.3s ease, opacity 0.3s ease;
      }

      .menu-slide-enter-from,
      .menu-slide-leave-to {
          max-height: 0;
          opacity: 0;
      }

      .menu-slide-enter-to,
      .menu-slide-leave-from {
          max-height: 500px;
          opacity: 1;
      }
  </style>
```

##### 5.1 រចនាសម្ព័ន្ធ៖
```sh
my-nuxt-app/
├── app/
│   ├── assets/
│   │   └── css/
│   │       ├── main.css
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── AppHero.vue
│   │   ├── AppFeature.vue
│   │   ├── AppProduct.vue
│   │   └── AppFooter.vue
│   ├── composables/
│   │   ├── useMobileMenu.ts
│   │   └── useScrollAnimation.ts
│   ├── pages/
│   │   └── index.vue
│   └── app.vue
├── public/
│   └── images/
│           ├── airpod.png
│           ├── iphone17.png
│           └── macbook.png
├── nuxt.config.ts
└── package.json
```

##### 5.2 `app/app.vue`
```html
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

##### 5.3 `composables/useMobileMenu.ts`
```js
import { ref, watch } from 'vue'

export const useMobileMenu = () => {
  const isMenuOpen = ref(false)

  // Disable body scroll when menu is open
  watch(isMenuOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  })

  // Animate on scroll
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                // If the element is visible in the viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-on-scroll') // Trigger animation
                    observer.unobserve(entry.target) // Stop observing once animated
                }
            })
        },
        { threshold: 0.2 } // 20% of element visible triggers animation
    )

    // Observe all elements with class "animate-on-scroll"
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
  return {
    isMenuOpen,
  }
}
```

##### 5.4 `composables/useMobileMenu.ts`
```js
import { onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = () => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-on-scroll')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    document
      .querySelectorAll('.animate-on-scroll')
      .forEach(el => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}

```

##### 5.5 `components/AppHeader.vue`
```html
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
```

##### 5.6 `components/AppHero.vue`
```html
<template>
    <section class="bg-black text-white pt-28 pb-24 text-center animate-on-scroll">
        <div class="max-w-[900px] mx-auto px-5">
            <h2 class="text-5xl md:text-6xl font-semibold mb-6">iPhone 15 Pro</h2>
            <p class="text-xl text-gray-400 mb-8">Titanium. So strong. So light. So Pro.</p>

            <div class="flex justify-center gap-6 mb-12">
                <button
                    class="bg-[#0071e3] text-white px-5 py-2 rounded-full transition transform hover:scale-105">Buy</button>
                <button class="text-[#2997ff] hover:underline transition cursor-pointer">Learn more →</button>
            </div>

            <img src="/images/iphone17.png" class="transition duration-500 hover:scale-110 mx-auto max-h-[420px]" />
        </div>
    </section>
</template>
```

##### 5.7 `components/AppFeature.vue`
```html
<template>
    <section class="py-24 animate-on-scroll delay-200">
        <div class="max-w-[1100px] mx-auto px-5 text-center">
            <h2 class="text-4xl font-semibold mb-14">Why iPhone 15 Pro</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="feature-card animate-on-scroll">
                    <div class="feature-icon text-5xl transition duration-500 hover:scale-125 hover:rotate-6">🛡️
                    </div>
                    <h3 class="feature-title">Titanium Design</h3>
                    <p class="feature-text">Aerospace-grade titanium makes it strong and lightweight.</p>
                </div>
                <div class="feature-card animate-on-scroll">
                    <div class="feature-icon text-5xl transition duration-500 hover:scale-125 hover:rotate-6">⚡
                    </div>
                    <h3 class="feature-title">A17 Pro Chip</h3>
                    <p class="feature-text">Incredible performance with amazing efficiency.</p>
                </div>
                <div class="feature-card animate-on-scroll">
                    <div class="feature-icon text-5xl transition duration-500 hover:scale-125 hover:rotate-6">📷
                    </div>
                    <h3 class="feature-title">Pro Camera</h3>
                    <p class="feature-text">Cinematic photos and stunning 4K Pro video.</p>
                </div>
            </div>
        </div>
    </section>
</template>
```

##### 5.8 `components/AppProduct.vue`
```html
<template>
    <main class="flex-1 max-w-[1100px] mx-auto px-5 py-20 w-full animate-on-scroll delay-300">
        <h2 class="text-4xl font-semibold text-center mb-12">Featured Gear</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                <img src="/images/iphone17.png" class="product-img" />
                <h3 class="product-title">iPhone 15 Pro</h3>
                <p class="product-price">$999</p>
                <button class="btn-primary-sm">Buy Now</button>
            </div>
            <div
                class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl opacity-70">
                <img src="/images/macbook.png" class="product-img" />
                <h3 class="product-title">MacBook Air M3</h3>
                <p class="product-price">$1299</p>
                <span class="sold-out">Sold Out</span>
            </div>
            <div
                class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                <img src="/images/airpod.png" class="product-img" />
                <h3 class="product-title">AirPods Pro</h3>
                <p class="product-price">$249</p>
                <button class="btn-primary-sm">Buy Now</button>
            </div>
        </div>
    </main>
</template>
```

##### 5.9 `components/AppFooter.vue`
```html
<template>
    <footer class="bg-[#f5f5f7] text-[#6e6e73] py-5 border-t border-gray-300 animate-on-scroll">
        <div class="max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row justify-between text-xs">
            <p>© 2026 Phone Shop Inc. All rights reserved.</p>
            <div class="flex gap-4 mt-3 md:mt-0">
                <a class="footer-link hover:underline">Privacy</a>
                <a class="footer-link hover:underline">Terms</a>
                <a class="footer-link hover:underline">Sales</a>
            </div>
        </div>
    </footer>
</template>
```

##### 5.10 `pages/index.vue`
```html
<script setup type=ts>
  import { useScrollAnimation } from '@/composables/useScrollAnimation'
  useScrollAnimation()
</script>

<template>
    <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">

        <!-- Header -->
        <app-header />  

        <!-- Hero -->
        <app-hero />

        <!-- Features -->
        <app-feature />

        <!-- Products -->
        <app-products />

        <!-- Footer -->
        <AppFooter />

    </div>
</template>
```

##### `5.11 assets/css/main.css`
```css
@import "tailwindcss";

/* Keyframes */
@keyframes fadeUp {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* Animation classes */
.fade-up {
    animation: fadeUp 1s ease-out forwards;
}

.fade-down {
    animation: fadeDown 0.6s ease-out forwards;
}

.fade-in {
    animation: fadeIn 1.5s ease-out forwards;
}

/* Scroll-triggered animation */
.fade-in-on-scroll {
    animation: fadeUp 0.8s ease-out forwards;
}

/* Optional delays */
.delay-200 {
    animation-delay: 0.2s;
}

.delay-300 {
    animation-delay: 0.3s;
}

.delay-500 {
    animation-delay: 0.5s;
}

/* Slide-down animation for mobile menu */
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
    max-height: 500px;
    opacity: 1;
}
```
@import "footer.md"