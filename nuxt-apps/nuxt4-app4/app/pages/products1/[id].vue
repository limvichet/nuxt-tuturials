<script setup lang="ts">
const route = useRoute()
const id = route.params.id

</script>

<template>
  <div class="detail-container">
    <button @click="navigateTo('/products')" class="back-btn">← Back</button>
    
    <div class="content">
      <h1>Information</h1>
      <div class="info-card">
        <h2>code# {{ id }}</h2>
        <p></p>
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