<template>
  <div class="relative h-full">
    <section class="absolute top-0 left-0 w-full h-fit z-10">
      <MessageHeader />
    </section>

    <div class="chats-content flex-grow overflow-y-auto py-20 px-6 space-y-3">
      <!-- Receiver message -->
      <div v-for="x in 10" :key="x">
        <MessageChat />
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <MessageFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { MessageHeader, MessageFooter, MessageChat } from "@/components/RightPanel"
import { connectSocket, getSocket } from "@/services/socket"

import { io, Socket } from "socket.io-client"

const socket = io("http://localhost:5000")

const message = ref("")
const messages = ref<any[]>([])

const sendMessage = () => {
  socket.emit("privateMessage", {
    senderId: "user1",
    recipientId: "user2",
    message: "test mea mesage"
  })
  message.value = ""
}

// onMounted(async () => {
//   await getAuthTest()
// })
</script>

<style scoped>
.chats-content {
  @apply h-full w-full bg-cover bg-no-repeat bg-center overflow-y-auto bg-[url('@/assets/images/bg-light.png')] dark:bg-[url('@/assets/images/bg-dark.png')];
}
</style>
