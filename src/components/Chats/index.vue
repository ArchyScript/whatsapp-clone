<template>
  <div class="h-full truncate">
    <!-- Header -->
    <ChatHeader />

    <!-- Chats -->
    <div class="!overflow-auto h-full pb-40 truncate">
      <!-- Archive Counter -->
      <ArchiveCounter />

      <NoConnection/>

      <!-- Chats -->
      <div v-for="chat in chats" class="">
        <Chat :chat @click="handleSelectChat" />
      </div>

      <LeftPanelFooter title="personal messages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chat, ArchiveCounter, ChatHeader } from "@/components/Chats"
import type { ChatType } from "@/types"
import { LeftPanelFooter,NoConnection } from "@/components/Common"
import { chats } from "@/db"

import { useAppStore } from "@/stores/app"
const { setShowChat, setSelectedChat } = useAppStore()

const handleSelectChat = (chat: ChatType) => {
  console.log("chat", chat)
  // Handle chat selection
  setSelectedChat(chat)
  setShowChat(true)
}
</script>
