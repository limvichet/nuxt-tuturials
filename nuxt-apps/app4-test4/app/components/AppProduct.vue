<template>
    <main class="flex-1 max-w-[1100px] mx-auto px-5 py-20 w-full animate-on-scroll delay-300">
        <h2 class="text-4xl font-semibold text-center mb-12">Featured Gear</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                <img src="/images/iphone17.png" class="product-img" />
                <h3 class="product-title">iPhone 15 Pro</h3>
                <p class="product-price">$999</p>
                <button class="btn-primary-sm">Buy Now</button>
            </div>
            <div
                class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl opacity-70">
                <img src="/images/macbook.png" class="product-img" />
                <h3 class="product-title">MacBook Air M3</h3>
                <p class="product-price">$1299</p>
                <span class="sold-out">Sold Out</span>
            </div>
            <div
                class="bg-[#f5f5f7] p-10 rounded-[24px] text-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                <img src="/images/airpod.png" class="product-img" />
                <h3 class="product-title">AirPods Pro</h3>
                <p class="product-price">$249</p>
                <button class="btn-primary-sm">Buy Now</button>
            </div>
        </div>
    </main>
</template>