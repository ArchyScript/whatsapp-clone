<template>
  <div class=" h-full truncate ">
    <!-- Header -->
    <ChatHeader />

    <!-- Chats -->
    <div class="!overflow-auto h-full pb-40 truncate ">
      <!-- Archive Counter -->
      <ArchiveCounter />

      <!-- Chats -->
      <div v-for="chat in chats" class="">
        <Chat :chat />
      </div>

      <LeftPanelFooter title="personal messages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chat, ArchiveCounter, ChatHeader } from '@/components/Chats'
import { LeftPanelFooter } from "@/components/Common"
import { chats } from "@/db"

</script>