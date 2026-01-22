<script setup>

import AppHeader from '~/components/AppHeader.vue'

import { useScrollAnimation } from '@/composables/useScrollAnimation'
useScrollAnimation()




</script>

<template>
    <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">

        <!-- Header -->
        <app-header />  

        <!-- Hero -->
        <app-hero />

        <!-- Features -->
        <app-feature />

        <!-- Products -->
        <app-product />

        <!-- Footer -->
        <AppFooter />

    </div>
</template>

