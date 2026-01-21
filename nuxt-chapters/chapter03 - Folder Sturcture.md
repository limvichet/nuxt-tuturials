@import "style.less"

# Folder Structures

`Nuxt4` បានធ្វើបច្ចុប្បន្នភាពរចនាសម្ព័ន្ធ Folder Structure ឱ្យកាន់តែមានរបៀបជាងមុន ជាពិសេសការប្រើប្រាស់ **app** directory ថ្មី

#### Default Structures

```sh
nuxt-app/
├── app/                 
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── middleware/
│   ├── pages/
│   ├── plugins/
│   ├── utils/
│   ├── app.vue          
├── public/
├── server/
├── stores/
├── nuxt.config.ts
└── package.json
```

#### ឧទាហរណ៍
**Folder Structures** សម្រាប់ Nuxt 4 ដែលមា​ន៖
- Header
- Sidebar
- Footer
- Detail Page

##### 1. Folder Structure
```sh
nuxt-project/
│
├── app/
│   ├── assets/
│   ├── components/       
│   │   ├── Header.vue
│   │   ├── Sidebar.vue
│   │   └── Footer.vue
│   ├── layouts/          
│   │   └── default.vue
│   ├── pages/            
│   │   ├── index.vue     
│   │   └── detail/       
│   │       ├── index.vue 
│   │       └── [id].vue  
│   └── app.vue           
│
├── public/               
├── server/               
├── nuxt.config.ts        
└── package.json          
```

#### 1.1 app.vue (The Root Component)
```html
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

#### 1.2 components/Header.vue
```html
<template>
  <header>
    <h1>Nuxt Header Page</h1>
  </header>
</template>
```

#### 1.2 components/Sidebar.vue
```html
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
```html
<template>
  <header class="bg-blue-500 text-white p-4">
    © 2026 Nuxt Mini Project
  </header>
</template>
```

#### 1.4 layouts/default.vue
```html
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

#### 1.5 pages/index.vue
```html
<template>
  <div>
    <h2>Home page</h2>
    <p>Welcome to Nuxt Home Page</p>
  </div>
</template>
```


#### 1.6 pages/detail.vue
```html
<template>
  <div>
    <h2>Detail Page</h2>
    <p>Welcoem to Detail Page</p>
  </div>
</template>
```

#### 1.7 pages/detail/[id].vue (Dynamic Page)
```html
<script setup>
  const route = useRoute()
  const id = route.params.id
</script>

<template>
  <div>
    <h2>Detail ID: {{ $route.params.id }}</h2>
    <p>This is a dynamic page for item #{{ id }}</p>
    
    <NuxtLink to="/">Back to Home</NuxtLink>
  </div>
</template>
```


#### 2. លំហាត់ 

**សូមបង្កើត website Book library** ដែលមាន
- ទំព័រដើម និងទំព័រលម្អិតសម្រាប់សៀវភៅនីមួយៗដោយប្រើ Dynamic Routes។
- កែសម្រួល layouts/default.vue ឱ្យមានរចនាសម្ព័ន្ធបែប Flexbox ដើម្បីឱ្យ Sidebar នៅខាងឆ្វេង និង Main Content នៅខាងស្តាំ 
- បន្ថែមព័ត៌មាននៅក្នុង components/Footer.vue ឱ្យបង្ហាញថ្ងៃខែឆ្នាំបច្ចុប្បន្ន។


@import "footer.md"