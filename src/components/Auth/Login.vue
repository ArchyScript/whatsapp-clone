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
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { login } from "@/infrastructures/api"
import { reactive } from "vue"

// Define the form state
const form = reactive({ email: "", password: "" })

// Handle login form submission
const handleLogin = async () => {
  if (!form.email || !form.password) {
    alert("Please fill in all fields.")
    return
  }

  const response = await login(form)

  console.log("form", form)
  console.log("response", response)
}
</script>

<style scoped>
/* Add custom styling if needed */
</style>
