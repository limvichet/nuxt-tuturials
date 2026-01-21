<template>
  <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">
    
    <header class="sticky top-0 z-50 bg-black/85 backdrop-blur-md text-white py-3">
      <div class="max-w-[1000px] mx-auto px-5 flex justify-between items-center">
        <div class="text-xl font-semibold tracking-tight">Apple Store</div>
        <nav class="space-x-6">
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">Store</a>
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">Mac</a>
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">iPhone</a>
          <a href="#" class="text-[0.85rem] opacity-80 hover:opacity-100 transition-opacity">Support</a>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-[1100px] mx-auto px-5 py-20 w-full">
      <h2 class="text-4xl font-semibold text-center mb-12">Featured Gear</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-[#f5f5f7] p-10 rounded-[24px] text-center hover:scale-[1.02] transition-transform duration-500 ease-out">
          <img src="/images/iphone17.png" alt="iPhone 15 Pro" class="h-48 mx-auto mb-6 object-contain" />
          <h3 class="text-xl font-semibold">iPhone 15 Pro</h3>
          <p class="text-[1.1rem] my-4 font-medium">$999</p>
          <button class="bg-[#0071e3] text-white px-[18px] py-2 rounded-full font-medium hover:bg-[#0077ed] transition-colors">Buy Now</button>
        </div>

        <div class="bg-[#f5f5f7] p-10 rounded-[24px] text-center opacity-70">
          <img src="/images/macbook.png" alt="MacBook Air" class="h-48 mx-auto mb-6 object-contain" />
          <h3 class="text-xl font-semibold">MacBook Air M3</h3>
          <p class="text-[1.1rem] my-4 font-medium">$1299</p>
          <span class="text-[#86868b] font-bold text-[0.9rem]">Sold Out</span>
        </div>

        <div class="bg-[#f5f5f7] p-10 rounded-[24px] text-center hover:scale-[1.02] transition-transform duration-500 ease-out">
          <img src="/images/airpod.png" alt="AirPods Pro" class="h-48 mx-auto mb-6 object-contain" />
          <h3 class="text-xl font-semibold">AirPods Pro</h3>
          <p class="text-[1.1rem] my-4 font-medium">$249</p>
          <button class="bg-[#0071e3] text-white px-[18px] py-2 rounded-full font-medium hover:bg-[#0077ed] transition-colors">Buy Now</button>
        </div>
      </div>
    </main>

    <footer class="bg-[#f5f5f7] text-[#6e6e73] py-5 border-t border-[#d2d2d7]">
      <div class="max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row justify-between text-[0.75rem]">
        <p>&copy; 2026 Phone Shop Inc. All rights reserved.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms of Use</a>
          <a href="#" class="hover:underline">Sales Policy</a>
        </div>
      </div>
    </footer>
  </div>
</template>