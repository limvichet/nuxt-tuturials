import { getCookie, getRouterParam, createError, readBody } from "h3"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = getCookie(event, "token")
  const id = getRouterParam(event, "id")

  if (!id) throw createError({ statusCode: 400, statusMessage: "Missing product ID" })
  if (!token) throw createError({ statusCode: 401, statusMessage: "Unauthorized" })

  const url = `${config.apiBaseUrl}/api/products/${id}`
  const method = event.method

  type Product = { id: number; name: string; category_id: number }

  try {
    if (method === "GET") {
      // Show product
      return await $fetch<Product>(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
    }

    if (method === "PUT") {
      // Update product
      const body = await readBody(event)
      return await $fetch(url, {
        method: "PUT",
        body,
        headers: { Authorization: `Bearer ${token}` },
      })
    }

    if (method === "DELETE") {
      // Delete product
      return await $fetch(url, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })
    }

    // Unsupported method
    throw createError({ statusCode: 405, statusMessage: "Method not allowed" })
  } catch (err: any) {
    console.error(err)
    throw createError({
      statusCode: err?.statusCode || 500,
      statusMessage: err?.statusMessage || "Failed to process request",
      data: err?.data,
    })
  }
})
