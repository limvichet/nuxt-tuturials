// Login
await $fetch("/api/auth/login", { method: "POST", body: { email, password } })

// List products
await $fetch("/api/products", { query: { q: search, page: 1 } })

// Create
await $fetch("/api/products", { method: "POST", body: form })

// Get one
await $fetch(`/api/products/${id}`)

// Update
await $fetch(`/api/products/${id}`, { method: "PUT", body: form })

// Delete
await $fetch(`/api/products/${id}`, { method: "DELETE" })

// Logout
await $fetch("/api/auth/logout", { method: "POST" })
