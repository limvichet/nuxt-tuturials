<script setup lang="ts">

interface Card {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const cards: Card[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro',
    description: 'Titanium design with A17 Pro chip.',
    image: '/images/iphone17.png',
    link: '/products'
  },
  {
    id: 2,
    title: 'MacBook Pro',
    description: 'Supercharged by M3 chip.',
    image: '/images/macbook.png',
    link: '/products'
  },
  {
    id: 3,
    title: 'iPad Pro',
    description: 'Ultra-thin. Ultra-powerful.',
    image: '/images/airpod.png',
    link: '/products'
  }
]
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <h1 class="text-2xl font-bold mb-6">Featured Products</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ContentCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :link="card.link"
        :id="card.id"
      />
    </div>
  </div>
</template>
