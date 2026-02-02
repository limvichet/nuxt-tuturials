@import "style.less"

# Props

Props គឺជាការបញ្ជូនទិន្នន័យពី **Parent** ទៅកាន់ **Child** ។ នៅក្នុង Nuxt 4 (Vue 3) យើងប្រើ `defineProps()` macro ដើម្បីកំណត់ Props។

##### 1. Acquire Props
##### 1.1 create child page in `components\APostCard.vue`
```html
<script setup>
  defineProps({
      title: {
          type: String,
          required: true
      },
      content: {
          type: String,
          required: true
      }
  })
</script>

<template>
  <div class="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    <h2 class="text-2xl font-extrabold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
      {{ title }}
    </h2>
    <p class="text-gray-700 text-base leading-relaxed">
      {{ content }}
    </p>
  </div>
</template>
```

##### 1.2 create parent page in `pages\aposts.vue`
```html
<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Header -->
    <header class="bg-gray-600 text-white py-6 shadow-md">
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold">My Blog</h1>
        <nav class="space-x-4">
          <a href="#" class="hover:text-gray-200 transition-colors">Home</a>
          <a href="#" class="hover:text-gray-200 transition-colors">About</a>
          <a href="#" class="hover:text-gray-200 transition-colors">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Main content with responsive sidebar -->
    <div class="max-w-6xl mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">
      
      <!-- Posts (left) -->
      <main class="flex-1 space-y-6">
        <APostCard 
          title="My First Post" 
          content="This is a simple post content using props in Nuxt 4."
        />
        <APostCard 
          title="Another Post" 
          content="Props make it easy to pass data from parent to child components."
        />
        <APostCard 
          title="Yet Another Post" 
          content="You can reuse the PostCard component multiple times without duplicating code."
        />
      </main>

      <!-- Sidebar (right) hidden on small screens -->
      <aside class="hidden lg:block w-80 flex-shrink-0 space-y-6">
        <!-- About -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">About Me</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Hi! I am Vichet, a web developer. I love building Nuxt and Vue projects.
          </p>
        </div>

        <!-- Categories -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">Categories</h3>
          <ul class="space-y-2 text-gray-700">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Web Development</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Nuxt.js</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Tailwind CSS</a></li>
          </ul>
        </div>

        <!-- Recent Posts -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">Recent Posts</h3>
          <ul class="space-y-2 text-gray-700">
            <li><a href="#" class="hover:text-blue-600 transition-colors">My First Post</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Another Post</a></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</template>
```

##### 2. Deepen Props
##### 2.1 create child page in `components\DPostCard.vue`
```html
  <script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    })
  </script>

  <template>
    <div class="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <h2 class="text-2xl font-extrabold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
        {{ title }}
      </h2>
      <p class="text-gray-700 text-base leading-relaxed">
        {{ content }}
      </p>
    </div>
  </template>
```

##### 2.2 create parent page in `pages\dposts.vue`
```html
<script setup lang="ts">
interface Post {
    title: string
    content: string
}

const posts: Post[] = [
    {
        title: "My First Post",
        content: "This is a simple post content using props in Nuxt 4."
    },
    {
        title: "Another Post",
        content: "Props make it easy to pass data from parent to child components."
    },
    {
        title: "Yet Another Post",
        content: "You can reuse the PostCard component multiple times without duplicating code."
    }
]

</script>

<template>
    <div class="min-h-screen bg-gray-50 font-sans">
        <!-- Header -->
        <header class="bg-gray-600 text-white py-6 shadow-md">
            <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <h1 class="text-3xl font-bold">My Blog</h1>
                <nav class="space-x-4">
                    <a href="#" class="hover:text-gray-200 transition-colors">Home</a>
                    <a href="#" class="hover:text-gray-200 transition-colors">About</a>
                    <a href="#" class="hover:text-gray-200 transition-colors">Contact</a>
                </nav>
            </div>
        </header>

        <!-- Main content with responsive sidebar -->
        <div class="max-w-6xl mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">

            <!-- Posts (left) -->
            <main class="flex-1 space-y-6">
                <DPostCard v-for="(post, index) in posts"    
                  :key="index" 
                  :title="post.title" 
                  :content="post.content" 
                />
            </main>

            <!-- Sidebar (right) hidden on small screens -->
            <aside class="hidden lg:block w-80 flex-shrink-0 space-y-6">
                <!-- About -->
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-3">About Me</h3>
                    <p class="text-gray-700 text-sm leading-relaxed">
                        Hi! I am Vichet, a web developer. I love building Nuxt and Vue projects.
                    </p>
                </div>

                <!-- Categories -->
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-3">Categories</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li><a href="#" class="hover:text-blue-600 transition-colors">Web Development</a></li>
                        <li><a href="#" class="hover:text-blue-600 transition-colors">Nuxt.js</a></li>
                        <li><a href="#" class="hover:text-blue-600 transition-colors">Tailwind CSS</a></li>
                    </ul>
                </div>

                <!-- Recent Posts -->
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-3">Recent Posts</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li><a href="#" class="hover:text-blue-600 transition-colors">My First Post</a></li>
                        <li><a href="#" class="hover:text-blue-600 transition-colors">Another Post</a></li>
                    </ul>
                </div>
            </aside>

        </div>
    </div>
</template>
```


##### 3. Create Props

##### 3.1 create types in `types/post.ts`
```js
  export interface PostItem {
    title: string
    content: string
  }
```

##### 3.2 create child page in `components\CPostCard.vue`
```html
<script setup lang="ts">
  import type { PostItem } from '~/types/post'
  const props = defineProps<PostItem>()
</script>

<template>
  <div class="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    <h2 class="text-2xl font-extrabold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
      {{ title }}
    </h2>
    <p class="text-gray-700 text-base leading-relaxed">
      {{ content }}
    </p>
  </div>
</template>
```

##### 3.3 create parent page in `pages\cposts.vue`
```html
<script setup lang="ts">

import type { PostItem } from '~/types/post'

const posts: PostItem[] = [
  {
    title: "My First Post",
    content: "This is a simple post content using props in Nuxt 4."
  },
  {
    title: "Another Post",
    content: "Props make it easy to pass data from parent to child components."
  },
  {
    title: "Yet Another Post",
    content: "You can reuse the PostCard component multiple times without duplicating code."
  }
]

</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Header -->
    <header class="bg-gray-600 text-white py-6 shadow-md">
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold">My Blog</h1>
        <nav class="space-x-4">
          <a href="#" class="hover:text-gray-200 transition-colors">Home</a>
          <a href="#" class="hover:text-gray-200 transition-colors">About</a>
          <a href="#" class="hover:text-gray-200 transition-colors">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Main content with responsive sidebar -->
    <div class="max-w-6xl mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">
      
      <!-- Posts (left) -->
      <main class="flex-1 space-y-6">
          <CPostCard
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :content="post.content"
          />
      </main>


      <!-- Sidebar (right) hidden on small screens -->
      <aside class="hidden lg:block w-80 flex-shrink-0 space-y-6">
        <!-- About -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">About Me</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Hi! I am Vichet, a web developer. I love building Nuxt and Vue projects.
          </p>
        </div>

        <!-- Categories -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">Categories</h3>
          <ul class="space-y-2 text-gray-700">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Web Development</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Nuxt.js</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Tailwind CSS</a></li>
          </ul>
        </div>

        <!-- Recent Posts -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-3">Recent Posts</h3>
          <ul class="space-y-2 text-gray-700">
            <li><a href="#" class="hover:text-blue-600 transition-colors">My First Post</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Another Post</a></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</template>
```

##### 4. លំហាត់

មាន​គម្រូដូចខាងក្រោមសូមបំលែងទៅជាទម្រង់ដូចចំនុច `3. Create Props`
##### 4.1 `components\ContentCard.vue`
```html
<script setup lang="ts">
  defineProps({
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    }
  })
</script>

<template>
  <div class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover object-fill"
    />

    <div class="p-5 space-y-3">
      <h3 class="text-lg font-semibold">
        {{ title }}
      </h3>

      <p class="text-gray-600 text-sm">
        {{ description }}
      </p>

      <!-- Append id to link -->
      <NuxtLink
        :to="`${link}/${id}`"
        class="inline-block text-blue-600 font-medium hover:underline"
      >
        Read more →
      </NuxtLink>
    </div>
  </div>
</template>
```

##### 4.2 `pages\contents.vue`
```html
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
```

@import "footer.md"