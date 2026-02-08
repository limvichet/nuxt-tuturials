const useUser = () => useState<any | null>("user", () => null);

export const useAuth = () => {
  type LoginREQ = { email: string; password: string }
  const token = useCookie<string | null>("token")
  const user = useUser()

  const loading = ref(false)
  const isAuthenticated = computed(() => !!user.value);

  const login = async (credentials: LoginREQ) => {
    try {
      loading.value = true
      const res = await $fetch("/api/auth/login", {
        method: "POST",
        body: credentials,
      })

      // Save token in cookie
      token.value = res.token
      // Save user in state      
      user.value = res.user

      // Navigate to dashboard
      await navigateTo("/dashboard", { replace: true })
    } catch (err: any) {
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      // 1️⃣ Tell server to logout (optional)
      await $fetch("/api/auth/logout", { method: "POST" })
    } catch (err) {
      console.warn("Logout API failed, clearing local state anyway", err)
    }

    // 2️⃣ Clear reactive state
    token.value = null  // ✅ this clears the cookie properly
    user.value = null

    // 3️⃣ Redirect to login
    await navigateTo("/login", { replace: true })
  }


  return {
    loading,
    login,
    logout,
    token,
    user,
    isAuthenticated,
  }
}
