<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center text-gray-800">Login</h1>

      <form @submit.prevent="handleLogin" class="mt-6 space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
            >
              <span v-if="showPassword">🙈</span>
              <span v-else>👁️</span>
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none flex justify-center items-center focus:ring focus:ring-blue-300"
        >
          <svg
            v-if="loading"
            class="w-5 h-5 mr-2 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>

          <span v-else="loading">Login</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { login } from "@/infrastructures/api"
import { reactive, ref } from "vue"
import { useAppStore } from "@/stores/app"
const { setLoginStatus } = useAppStore()

const { setUserData } = useAppStore()

// Define the form state
const form = reactive({ email: "scripted@mail.com", password: "Scripted@10" })

const loading = ref(false)
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Handle login form submission
const handleLogin = async () => {
  if (!form.email || !form.password) {
    alert("Please fill in all fields.")
    return
  }
  loading.value = true

  const response = await login(form)
  loading.value = false

  console.log("form", form)
  console.log("response", response)

  setLoginStatus(true)
  setUserData(response.user)
}
</script>

<style scoped>
/* Add custom styling if needed */
</style>
