<template>
  <div class=" h-full ">
    <!-- Header -->
    <div class="space-y-6">
      <ChatHeader />
     </div>

    <!-- Chats -->
    <div class="overflow-auto h-full pb- 32">
      <!-- Archive Counter -->
      <ArchiveCounter />

      <!-- Chats -->
      <div v-for="chat in 30">
        <Chat />
      </div>

      <ChatFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Chat, ChatFooter, ArchiveCounter, ChatHeader,   } from '@/components/Chats'
const tabs = [
  { title: 'all', },
  { title: 'unread', },
  { title: 'read' }
]
const activeTab = ref('all')
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
