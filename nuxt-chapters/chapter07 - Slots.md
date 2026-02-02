@import "style.less"

# Slots

**Slot** ជាបច្ចេកទេសកម្រិតខ្ពស់មួយនៅក្នុង Modern Frameworks ដូចជា Vue.js, React ដែលអនុញ្ញាតឱ្យ `Child` បញ្ជូនទិន្នន័យទៅឱ្យ Parent ដើម្បបង្ហាញព័ត៍មាននៅលើ Parent
- **Child Component**: បង្កើតរចនាសម្ព័ន្ធទូទៅ និងកំណត់ទីតាំងដោយប្រើ Tag `<slot />`
- Parent Component: នៅពេលហៅ Child មកប្រើ គឺសរសេរ Content (HTML, Text, ឬ Component ផ្សេងទៀត) នៅចន្លោះ Opening និង Closing tag របស់ Child នោះ។

#### 1. Acquire Slot 
- Child Component `components/Card.vue`
```html
<template>
  <div class="card">
    <h3>Card Component</h3>
    <slot />
  </div>
</template>
```

- Parent Component `pages/index.vue`
```html
<template>
  <Card>
    <p>Page from Parent!</p>
    <button>Click here</button>
  </Card>
</template>
```

#### 2. Deepen Slot
- Child Component `components/MyCard.vue`
```html
<template>
  <div class="card">
    <header>
      <slot name="header" />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
```

- Parent Component `pages/index.vue`
```html
<MyCard>
  <template #header>
    <h1>Header here</h1>
  </template>

  <p>Content here</p>

  <template #footer>
    <small>Footer here</small>
  </template>
</MyCard>
```

#### 3. Create Slot
- child Componenet `componnents/ListUser.vue`
`:user="user"` → Child ផ្ញើ data ទៅ parent
```html
<script setup>
const users = [
  { id: 1, name: 'Sok' },
  { id: 2, name: 'Sao' }
]
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <slot :user="user" />
    </li>
  </ul>
</template>
```

- Parent Component `pages/index.vue`
`{ user }` → Parent ទទួល data ពី child
```html
<ListUser v-slot="{ user }">
  <strong>ឈ្មោះ៖ {{ user.name }}</strong>
</ListUser>
```


@import "footer.md"