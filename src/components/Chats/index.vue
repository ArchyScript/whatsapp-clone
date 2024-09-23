<template>
  <div>
    <!-- Header -->
    <div> </div>

    <!-- body -->
    <div>
      <!-- Archive -->
      <div>

      </div>


      <!-- Chats -->
      <div>
        <Chat />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chat from '@/components/Chats/Chat.vue'
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
