import { readBody, getCookie, createError, type EventHandler, type H3Event } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  const { apiBaseUrl } = useRuntimeConfig(event)

  const token = getCookie(event, "token")
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    })
  }

  const body = await readBody(event)

  type Product = { id: number; name: string; category_id: number }

  try {
    const res = await $fetch<Product>(`${apiBaseUrl}/api/products`, {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    return res
  } catch (err: any) {
    const message =
      err?.data?.message || err?.message || "Failed to create product"

    throw createError({
      statusCode: err?.status || 500,
      statusMessage: message,
      data: err?.data,
    })
  }
})

