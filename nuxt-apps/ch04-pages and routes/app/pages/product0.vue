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
    <h1>Phone Shop</h1>
    <div class="product-grid">
      <ProductCard 
        v-for="item in products" 
        :key="item.id"
        :id="item.id" 
        :title="item.name" 
        :price="item.price"
        :is-sold-out="item.soldOut"
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