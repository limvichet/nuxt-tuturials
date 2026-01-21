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
    <p class="price">Price: ${{ price }}</p>   
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