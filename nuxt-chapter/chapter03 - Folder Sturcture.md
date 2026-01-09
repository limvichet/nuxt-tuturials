@import "style.less"

# Folder Structures

#### Default Structures

```sh
nuxt-app/
│
├── assets/          # រក្សាទុក CSS, SCSS, រូបភាព (ត្រូវបាន compile)
├── components/      # Components ដែលអាចប្រើឡើងវិញ (auto import)
├── composables/     # Logic ដែលអាចប្រើឡើងវិញ (useAuth, useFetch)
├── layouts/         # Layout ទំព័រ (Header, Footer, Sidebar)
│   └── default.vue  # Layout លំនាំដើម
├── middleware/      # Middleware សម្រាប់ពិនិត្យ route (auth, guest)
├── pages/           # ទំព័រ (Nuxt បង្កើត route ស្វ័យប្រវត្តិ)
│   ├── index.vue    # ទំព័រដើម (/)
│   └── about.vue    # /about
├── plugins/         # Plugins (axios, toast, library ផ្សេងៗ)
├── public/          # Files static (favicon, images)
├── server/          # Backend / API (Nitro)
│   └── api/         # API endpoints
├── stores/          # State management (Pinia store)
├── app.vue          # Component មេ (Root App)
├── nuxt.config.ts   # ការកំណត់រចនាសម្ព័ន្ធ Nuxt
└── package.json     # Dependencies និង scripts
```

#### ឧទាហរណ៍
`Folder Structures` សម្រាប់ Nuxt 4 ដែលមា​ន៖
- Header
- Sidebar
- Footer
- Detail Page

##### 1. Folder Structure
```sh
nuxt-project/
│
├── assets/            # CSS, SCSS, រូបភាព
├── components/        # Components reusable
│   ├── Header.vue     # Header component
│   ├── Sidebar.vue    # Sidebar component
│   └── Footer.vue     # Footer component
├── layouts/           # Layouts
│   └── default.vue    # Layout ទំព័រលំនាំដើម
├── pages/             # Pages (auto routing)
│   ├── index.vue      # ទំព័រដើម
│   └── detail.vue     # ទំព័រ Detail
├── app.vue            # Root App
├── nuxt.config.ts     # Nuxt configuration
└── package.json       # Dependencies
```

#### 1.1 components/Header.vue
```vue
<template>
  <header class="bg-blue-500 text-white p-4">
    <h1>Nuxt Header Page</h1>
  </header>
</template>
```

#### 1.2 components/Sidebar.vue
```vue
<template>
  <aside>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/detail">Detail</NuxtLink></li>
    </ul>
  </aside>
</template>

<style scoped>
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 10px; }
</style>
```

#### 1.3 components/Footer.vue
```vue
<template>
  <header class="bg-blue-500 text-white p-4">
    © 2026 Nuxt Mini Project
  </header>
</template>
```

#### 1.4 layouts/default.vue
```vue
<template>
  <div>
    <!-- Header -->
    <Header />

    <div>
      <!-- Sidebar -->
      <Sidebar />
      <!-- Main Content -->
      <main>
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
```

#### pages/index.vue
```vue
<template>
  <div>
    <h2>ទំព័រដើម</h2>
    <p>សូមស្វាគមន៍មកកាន់ Nuxt Home Page</p>
  </div>
</template>
```

#### 1.6 pages/detail.vue
```vue
<template>
  <div>
    <h2>ទំព័រ Detail</h2>
    <p>នេះគឺជាទំព័រ Detail Page</p>
  </div>
</template>
```


លំហាត់ 
បង្កើត page dynamic /product/[id]

@import "footer.md"