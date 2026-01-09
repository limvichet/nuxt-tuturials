@import "style.less"

# Pages and Routing

#### 1. Folder Structures

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



Nuxt បង្កើត route ស្វ័យប្រវត្តិពី file ក្នុង `pages/`

```sh
-| pages/
---| about.vue
---| index.vue
---| posts/
-----| [id].vue
```

```vue
<template>
    <div>
        <h1>About Us</h1>
        <p>This is about page</p>
    </div>
</template>
```

លំហាត់ 
បង្កើត page dynamic /product/[id]

@import "footer.md"