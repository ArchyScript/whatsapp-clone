<template>
  <div class="flex flex-col items-center m-auto p-10">
    <!-- Image Section -->
    <div class="mb-6  ">
      <img class="w-80" alt="WhatsApp" src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" />
    </div>

    <!-- Main Text Section -->
    <div class="text-center space-y-3">
      <h1 class="text-2xl font-medium text-gray-600">Download WhatsApp for Windows</h1>
      <p class="text-gray-600 w-3/4 mx-auto">
        Make calls, share your screen, and get a faster experience when you download the
        Windows app.
      </p>

      <!-- Button Section -->
      <div class="mt-4">
        <button class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Get from Microsoft Store
        </button>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="flex items-center mt-4 text-gray-500 text-sm">
      <Icon name="lock-small" class="!h-3" />
      <span class="ml-2">Your personal messages are end-to-end encrypted</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signup } from '@/infrastructures/api'

const register = async () => {
  const response = await signup({
    username: "Tungii",
    password: "Tioajh@10",
    phoneNumber: '567893462653',
    email: 'yung@email.com'
  })

  console.log('response', response)
}
</script>

<style scoped></style>
