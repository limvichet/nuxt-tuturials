  <script setup>
    import { useScrollAnimation } from '@/composables/useScrollAnimation'
    useScrollAnimation()
  </script>

  <template>
      <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">

          <!-- Header -->
            <AppHeader />
            
          <!-- Hero -->
            <AppHero />

          <!-- Features -->
            <AppFeature />

          <!-- Products -->
            <AppProduct />

          <!-- Footer -->
            <AppFooter />

      </div>
  </template>



