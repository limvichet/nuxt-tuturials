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

##### 6. ឧទាហរណ៍ Props
- Child Component `app/components/ProductCard.vue`
- Parrent Page `app/pages/products/index.vue)`
- Dynamic route page `app/pages/products/[id].vue`

##### 6.1 Child Component `app/components/ProductCard.vue`
```vue
<script setup lang="ts">

  const props = defineProps<{
    id: number
    title: string
    price: number
    isSoldOut?: boolean
  }>()

  const goToDetail = () => {
    navigateTo(`/products/${props.id}`)
  }

</script>

<template>
  <div class="product-card" @click="goToDetail">
    <div class="badge" v-if="isSoldOut">អស់ស្តុក</div>
    <h3>{{ title }}</h3>
    <p class="price">តម្លៃ: ${{ price }}</p>
    
    <button :disabled="isSoldOut" @click="onAddToCart">
      {{ isSoldOut ? 'Out of Stock' : 'ថែមក្នុងកន្ត្រក' }}
    </button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: white;
}
.product-card:hover {
  border-color: #4f46e5;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.price { color: #059669; font-weight: bold; }
.badge {
  position: absolute;
  top: 10px; right: 10px;
  background: #ef4444; color: white;
  font-size: 10px; padding: 2px 8px; border-radius: 20px;
}
button {
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  background: #4f46e5; color: white; border: none; border-radius: 6px;
}
button:disabled { background: #ccc; cursor: not-allowed; }
</style>
```

##### 6.2 Parrent Page `app/pages/products/index.vue`
```vue
<script setup lang="ts">
interface Product {
  id: number
  name: string
  price: number
  soldOut: boolean
}

const products = ref<Product[]>([
  { id: 1, name: 'iPhone 15 Pro', price: 999, soldOut: false },
  { id: 2, name: 'MacBook Air M3', price: 1299, soldOut: true },
  { id: 3, name: 'AirPods Pro', price: 249, soldOut: false }
])

</script>

<template>
  <div class="container">
    <h1>ហាងទំនិញ</h1>
    <div class="product-grid">
      <ProductCard 
        v-for="item in products" 
        :key="item.id"
        :id="item.id" 
        :title="item.name" 
        :price="item.price"
        :is-sold-out="item.soldOut"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>
  .container { max-width: 1000px; margin: auto; padding: 40px; }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
</style>
```

##### 6.3 Dynamic route page `app/pages/products/[id].vue`
```vue
<script setup lang="ts">
const route = useRoute()
const id = route.params.id

</script>

<template>
  <div class="detail-container">
    <button @click="navigateTo('/products')" class="back-btn">← ត្រឡប់ក្រោយ</button>
    
    <div class="content">
      <h1>ព័ត៌មានលម្អិតផលិតផល</h1>
      <div class="info-card">
        <h2>លេខកូដទំនិញ: #{{ id }}</h2>
        <p>នេះគឺជាទំព័រលម្អិតសម្រាប់ផលិតផល ID លេខ {{ id }}។ អ្នកអាចដាក់រូបភាព ការពិពណ៌នាវែងៗ និងមតិយោបល់របស់អ្នកប្រើប្រាស់នៅទីនេះ។</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container { max-width: 800px; margin: auto; padding: 40px; }
.back-btn {
  background: none; border: 1px solid #ccc; padding: 5px 15px;
  cursor: pointer; border-radius: 5px; margin-bottom: 20px;
}
.info-card {
  background: #f9fafb;
  padding: 30px;
  border-radius: 15px;
  border: 1px dashed #4f46e5;
}
</style>
```

#### 7. Slots
**Slot** ជាបច្ចេកទេសកម្រិតខ្ពស់អនុញ្ញាតឱ្យ `Child` បញ្ជូនទិន្នន័យទៅឱ្យ Parent ដើម្បបង្ហាញព័ត៍មាននៅលើ Parent

- chid **ListUser.server.vue**
```vue
<script setup>
const users = [{ id: 1, name: 'Sok' }, { id: 2, name: 'Sao' }]
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <slot name="item" :user="user" />
    </li>
  </ul>
</template>
```

- Parent **pages/users.vue**
```vue
<template>
  <ListUser>
    <template #item="{ user }"> <strong>ឈ្មោះ៖ {{ user.name }}</strong>
    </template>
  </ListUser>
</template>
```

#### 8. Multiple Slots

##### 8.1 create `app/components/BaseCard.vue`
```vue
<template>
  <div class="card">
    <header v-if="$slots.header" class="card-header">
      <slot name="header" />
    </header>

    <div class="card-body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="card-footer">
      <slot name="header" />
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.card { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
.card-header { padding: 10px; background: #f5f5f5; border-bottom: 1px solid #ddd; font-weight: bold; }
.card-body { padding: 15px; }
.card-footer { padding: 10px; background: #fafafa; border-top: 1px solid #ddd; text-align: right; }
</style>
```

##### 8.2 use `app/pages/index.vue`
ដើម្បីបញ្ជូន Content ទៅកាន់ **Slot** នីមួយៗ យើងប្រើ attribute `#` សញ្ញាខ្លីនៃ `v-slot:`
```vue
<template>
  <div class="p-10">
    
    <BaseCard>
      <template #header>
        <h3>កាតផលិតផលថ្មី</h3>
      </template>

      <p>នេះគឺជាព័ត៌មានលំអិតអំពីផលិតផលដែលយើងទើបតែនឹងនាំចូលមកកាន់ហាងរបស់យើង។</p>
      <img src="https://via.placeholder.com/150" alt="Product" />

      <template #footer>
        <button class="bg-blue-500 text-white px-4 py-1 rounded">មើលបន្ថែម</button>
      </template>
    </BaseCard>

  </div>
</template>
```

@import "footer.md"