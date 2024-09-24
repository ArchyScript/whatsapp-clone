<template>
  <div class=" h-full ">
    <!-- Header -->
    <ChatHeader />
    <Search />

    <!-- Chats -->
    <div class="overflow-auto  h-full">
      <!-- Archive Counter -->
      <ArchiveCounter />

      <!-- Chats -->
      <div v-for="chat in 58">
        <Chat />
      </div>

      <ChatFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chat, ChatFooter, ArchiveCounter, ChatHeader, Search } from '@/components/Chats'
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
