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
#### 3. Create Slot


@import "footer.md"