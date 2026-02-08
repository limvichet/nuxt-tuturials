import { getCookie, getQuery, createError, type H3Event } from "h3"

// --------------------
// Types
// --------------------
type Category = {
  id: number
  name: string
}

type Product = {
  id: number
  name: string
  category?: Category
}

type PaginatedProducts = {
  current_page: number
  data: Product[]
  per_page: number
  total: number
  last_page: number
  [key: string]: any // for extra fields like links, from, to, etc.
}

// --------------------
// Handler
// --------------------
export default defineEventHandler(async (event: H3Event): Promise<PaginatedProducts> => {
  const { apiBaseUrl } = useRuntimeConfig(event)

  // 1️⃣ Get token from cookie
  const token = getCookie(event, "token")
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    })
  }

  // 2️⃣ Get query parameters (search, page, perPage)
  const query = getQuery(event)

  try {
    // 3️⃣ Call Laravel API
    const res: PaginatedProducts = await $fetch(`${apiBaseUrl}/api/products`, {
      method: "GET",
      query,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })

    // 4️⃣ Return the full paginated response
    return res
  } catch (err: any) {
    const message = err?.data?.message || err?.message || "Failed to fetch products"
    throw createError({
      statusCode: err?.status || 500,
      statusMessage: message,
      data: err?.data,
    })
  }
})
