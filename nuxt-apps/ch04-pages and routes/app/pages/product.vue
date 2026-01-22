<template>
  <div class="flex flex-col min-h-screen font-sans bg-white text-[#1d1d1f]">

    <!-- Header -->
    <header
      class="sticky top-0 z-50 bg-black/85 backdrop-blur-md text-white py-3
             animate-fade-down"
    >
      <div class="max-w-[1000px] mx-auto px-5 flex justify-between items-center">
        <h1 class="text-xl font-semibold tracking-tight">Apple Store</h1>
        <nav class="space-x-6">
          <a class="nav-link">Store</a>
          <a class="nav-link">Mac</a>
          <a class="nav-link">iPhone</a>
          <a class="nav-link">Support</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="bg-black text-white pt-28 pb-24 text-center animate-fade-up">
      <div class="max-w-[900px] mx-auto px-5">
        <h2 class="text-5xl md:text-6xl font-semibold mb-6">
          iPhone 15 Pro
        </h2>

        <p class="text-xl text-gray-400 mb-8">
          Titanium. So strong. So light. So Pro.
        </p>

        <div class="flex justify-center gap-6 mb-12">
          <button class="btn-primary">Buy</button>
          <button class="btn-link">Learn more →</button>
        </div>

        <img
          src="/images/iphone17.png"
          class="mx-auto max-h-[420px] image-hover"
        />
      </div>
    </section>

    <!-- Features -->
    <section class="py-24 animate-fade-up delay-200">
      <div class="max-w-[1100px] mx-auto px-5 text-center">
        <h2 class="text-4xl font-semibold mb-14">
          Why iPhone 15 Pro
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3 class="feature-title">Titanium Design</h3>
            <p class="feature-text">
              Aerospace-grade titanium makes it strong and lightweight.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">A17 Pro Chip</h3>
            <p class="feature-text">
              Incredible performance with amazing efficiency.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📷</div>
            <h3 class="feature-title">Pro Camera</h3>
            <p class="feature-text">
              Cinematic photos and stunning 4K Pro video.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <main class="flex-1 max-w-[1100px] mx-auto px-5 py-20 w-full animate-fade-up delay-300">
      <h2 class="text-4xl font-semibold text-center mb-12">
        Featured Gear
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="product-card">
          <img src="/images/iphone17.png" class="product-img" />
          <h3 class="product-title">iPhone 15 Pro</h3>
          <p class="product-price">$999</p>
          <button class="btn-primary-sm">Buy Now</button>
        </div>

        <div class="product-card opacity-70">
          <img src="/images/macbook.png" class="product-img" />
          <h3 class="product-title">MacBook Air M3</h3>
          <p class="product-price">$1299</p>
          <span class="sold-out">Sold Out</span>
        </div>

        <div class="product-card">
          <img src="/images/airpod.png" class="product-img" />
          <h3 class="product-title">AirPods Pro</h3>
          <p class="product-price">$249</p>
          <button class="btn-primary-sm">Buy Now</button>
        </div>
      </div>
    </main>

    <!-- Checkout -->
    <section class="bg-[#f5f5f7] py-24 animate-fade-up delay-500">
      <div class="max-w-[900px] mx-auto px-5">
        <div class="bg-white rounded-[28px] p-10 hover-lift">
          <h2 class="text-3xl font-semibold mb-8 text-center">
            Complete Your Purchase
          </h2>

          <div class="flex flex-col md:flex-row gap-10 items-center">
            <img src="/images/iphone17.png" class="h-56 image-hover" />

            <div class="flex-1">
              <h3 class="text-2xl font-semibold mb-2">
                iPhone 15 Pro
              </h3>

              <p class="text-[#6e6e73] mb-4">
                256GB · Natural Titanium
              </p>

              <div class="flex gap-4 mb-6 items-center">
                <span class="text-xl font-semibold">$999</span>
                <span class="text-sm text-[#6e6e73]">Free shipping</span>
              </div>

              <div class="flex gap-4">
                <button class="btn-primary">Checkout</button>
                <button class="btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer animate-fade-in">
      <div class="max-w-[1000px] mx-auto px-5 flex flex-col md:flex-row justify-between text-xs">
        <p>© 2026 Phone Shop Inc. All rights reserved.</p>
        <div class="flex gap-4 mt-3 md:mt-0">
          <a class="footer-link">Privacy</a>
          <a class="footer-link">Terms</a>
          <a class="footer-link">Sales</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  to { opacity: 1; }
}

/* Animation classes */
.animate-fade-up { animation: fadeUp 1s ease-out forwards; }
.animate-fade-down { animation: fadeDown 0.6s ease-out forwards; }
.animate-fade-in { opacity: 0; animation: fadeIn 1.5s ease-out forwards; }
.delay-200 { animation-delay: .2s; }
.delay-300 { animation-delay: .3s; }
.delay-500 { animation-delay: .5s; }

/* Reusable UI */
.nav-link { font-size: .85rem; opacity: .8; transition: .3s; }
.nav-link:hover { opacity: 1; }

.btn-primary {
  background:#0071e3; color:white;
  padding:.75rem 2rem; border-radius:999px;
  transition:.3s;
}
.btn-primary:hover { transform:scale(1.05); box-shadow:0 10px 25px rgba(0,0,0,.2); }
.btn-primary:active { transform:scale(.95); }

.btn-primary-sm {
  background:#0071e3; color:white;
  padding:.5rem 1.25rem; border-radius:999px;
  transition:.3s;
}
.btn-primary-sm:hover { transform:scale(1.05); }

.btn-outline {
  border:1px solid #0071e3; color:#0071e3;
  padding:.75rem 2rem; border-radius:999px;
  transition:.3s;
}
.btn-outline:hover { background:#0071e3; color:white; }

.btn-link { color:#2997ff; transition:.3s; }
.btn-link:hover { text-decoration:underline; }

.image-hover { transition:.5s; }
.image-hover:hover { transform:scale(1.1); }

.product-card {
  background:#f5f5f7; padding:2.5rem; text-align:center;
  border-radius:24px; transition:.5s;
}
.product-card:hover { transform:translateY(-8px) scale(1.03); box-shadow:0 20px 40px rgba(0,0,0,.15); }

.product-img { height:12rem; margin:auto; margin-bottom:1.5rem; transition:.5s; }
.product-card:hover .product-img { transform:scale(1.1); }

.feature-icon { font-size:3rem; transition:.5s; }
.feature-icon:hover { transform:scale(1.3) rotate(5deg); }

.footer { background:#f5f5f7; color:#6e6e73; padding:1.25rem; border-top:1px solid #ddd; }
.footer-link:hover { text-decoration:underline; }
</style>
