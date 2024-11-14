<template>
  <div class="flex items-center p-4 bg-gray-100 rounded-md">
    <!-- Icon -->
    <div class="mr-4">
      <span aria-hidden="true" class="text-2xl text-current">
        <svg viewBox="0 0 48 48" height="48" width="48" preserveAspectRatio="xMidYMid meet">
          <title>alert-computer</title>
          <path
            fill="currentColor"
            d="M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33s22.154-9.924,22.154-22.165S36.389,2,24.154,2z M23.985,34.138L12.976,19.459c3.028-2.294,6.881-3.67,11.009-3.67c4.129,0,7.982,1.376,11.009,3.67L23.985,34.138z M23.04,28.488h1.981v-1.981H23.04V28.488z M23.04,24.526h1.981v-5.017H23.04 V24.526z"
          ></path>
        </svg>
      </span>
    </div>

    <!-- Message Content -->
    <div>
      <div class="text-lg font-semibold">Computer not connected</div>
      <div class="text-sm text-gray-600">
        Make sure your computer has an active internet connection.
        <span class="flex items-center space-x-2 mt-2">
          <button
            @click="handleReconnect"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Reconnect
          </button>
          <span aria-hidden="true" class="text-gray-500">
            <svg viewBox="0 0 30 30" height="20" width="18" preserveAspectRatio="xMidYMid meet">
              <title>chevron</title>
              <path
                fill="currentColor"
                d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"
              ></path>
            </svg>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang=""></script>
