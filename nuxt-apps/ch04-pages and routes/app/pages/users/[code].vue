<script setup>
    const route = useRoute();
    console.log(route);
    let code = route.params.code;

</script>

<template>
    <ul class="flex flex-row gap-4 justify-center py-5">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/users/7">Profile</NuxtLink></li>
    </ul>
    <h1>Profile</h1>
    <p>
        User id : {{ code }}
    </p>
</template>