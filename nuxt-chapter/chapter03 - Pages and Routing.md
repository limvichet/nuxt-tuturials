# Pages and Routing

Nuxt បង្កើត route ស្វ័យប្រវត្តិពី file ក្នុង `pages/`

```sh
pages/
├─ index.vue → /
├─ about.vue → /about
└─ blog/
└─ [id].vue → /blog/1
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