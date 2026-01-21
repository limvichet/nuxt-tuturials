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

#### 5. Props
Props គឺជាការបញ្ជូនទិន្នន័យពី **Parent** ទៅកាន់ **Child** ។ នៅក្នុង Nuxt 4 (Vue 3) យើងប្រើ `defineProps()` macro ដើម្បីកំណត់ Props។

##### 5.1 បង្កើត Component កូន (Child Component)
- component `app/components/BaseButton.vue`

  ```vue
  <script setup>
  const props = defineProps({
    text: {
      type: String,
      default: 'Click Me'
    },
    color: {
      type: String,
      default: 'blue'
    }
  })
  </script>

  <template>
    <button :style="{ backgroundColor: color }" class="my-button">
      {{ text }}
    </button>
  </template>

  <style scoped>
  .my-button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  ```

##### 5.2 ហៅប្រើនៅក្នុង Page (Parent Component)
- page `app/pages/index.vue`
```vue
<template>
  <div>
    <h1>ស្វាគមន៍មកកាន់ Nuxt 4</h1>
    <BaseButton text="រក្សាទុក" color="green" />
    <BaseButton text="លុបចេញ" color="red" />
    <BaseButton />
  </div>
</template>
```

##### ឧទាហរណ៍

- Full codes `products.vue` using tailwindcss
```html
<template>
  <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">
    
    <header class="sticky top-0 z-50 bg-black/85 backdrop-blur-md text-white py-3">
      <div class="max-w-[1000px] mx-auto px-5 flex justify-between items-center">
        <div class="text-xl font-semibold tracking-tight">Apple Store</div>
        <nav class="space-x-6">
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">Store</a>
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">Mac</a>
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">iPhone</a>
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">Support</a>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-[1100px] mx-auto px-5 py-20 w-full">
      <h2 class="text-4xl font-semibold text-center mb-12">Featured Gear</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-[#f5f5f7] p-10 rounded-[24px] text-center hover:scale-[1.02] transition-transform duration-500 ease-out">
          <img src="/images/iphone17.png" alt="iPhone 15 Pro" class="h-48 mx-auto mb-6 object-contain" />
          <h3 class="text-xl font-semibold">iPhone 15 Pro</h3>
          <p class="text-[1.1rem] my-4 font-medium">$999</p>
          <button class="bg-[#0071e3] text-white px-[18px] py-2 rounded-full font-medium hover:bg-[#0077ed] transition-colors">Buy Now</button>
        </div>

        <div class="bg-[#f5f5f7] p-10 rounded-[24px] text-center opacity-70">
          <img src="/images/macbook.png" alt="MacBook Air" class="h-48 mx-auto mb-6 object-contain" />
          <h3 class="text-xl font-semibold">MacBook Air M3</h3>
          <p class="text-[1.1rem] my-4 font-medium">$1299</p>
          <span class="text-[#86868b] font-bold text-[0.9rem]">Sold Out</span>
        </div>

        <div class="bg-[#f5f5f7] p-10 rounded-[24px] text-center hover:scale-[1.02] transition-transform duration-500 ease-out">
          <img src="/images/airpod.png" alt="AirPods Pro" class="h-48 mx-auto mb-6 object-contain" />
          <h3 class="text-xl font-semibold">AirPods Pro</h3>
          <p class="text-[1.1rem] my-4 font-medium">$249</p>
          <button class="bg-[#0071e3] text-white px-[18px] py-2 rounded-full font-medium hover:bg-[#0077ed] transition-colors">Buy Now</button>
        </div>
      </div>
    </main>

    <footer class="bg-[#f5f5f7] text-[#6e6e73] py-5 border-t border-[#d2d2d7]">
      <div class="max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row justify-between text-[0.75rem]">
        <p>&copy; 2026 Phone Shop Inc. All rights reserved.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms of Use</a>
          <a href="#" class="hover:underline">Sales Policy</a>
        </div>
      </div>
    </footer>
  </div>
</template>
```


@import "footer.md"