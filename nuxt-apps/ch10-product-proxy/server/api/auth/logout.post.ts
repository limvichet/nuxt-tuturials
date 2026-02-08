export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    // Call Laravel logout (optional but recommended)
    await $fetch(config.apiBaseUrl + "/api/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
      },
    })
  } catch (e) {
    // Even if Laravel fails, we still clear local cookie
    console.warn("logout failed, clearing cookie anyway")
  }

  // Remove token cookie
  deleteCookie(event, "token", { path: "/" })

  return { success: true }

})
