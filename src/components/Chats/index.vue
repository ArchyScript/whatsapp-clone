<template>
  <div class=" h-full truncate ">
    <!-- Header -->
    <ChatHeader />

    <!-- Chats -->
    <div class="!overflow-auto h-full pb-40 truncate ">
      <!-- Archive Counter -->
      <ArchiveCounter />

      <!-- Chats -->
      <div v-for="chat in chats" class="trun cate">
        <Chat :chat />
      </div>

      <ChatFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chat, ChatFooter, ArchiveCounter, ChatHeader, } from '@/components/Chats'
import { chats } from "@/db" 
</script>


<style>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
