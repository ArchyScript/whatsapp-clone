<template>
  <div class="relative h-full">
    <section class="absolute top-0 left-0 w-full h-fit ">
      <MessageHeader />
    </section>

    <div class="  chats-content  flex-grow overflow-y-auto">
      <div class="  bg-red-500 dark:bg-green-800 !p-[40px]">chats content</div>
      <div class="!p-[40px]">chatrers content</div>
      <div class="!p-[40px]">chats wefcontent</div>
      <div class="!p-[40px]">chatsree content</div>
      <div class="!p-[40px]">chats ewecontent</div>
      <div class="!p-[40px]">chats ewecontent</div>
      <div class="!p-[40px]">chats ewecontent</div>
      <div class="!p-[40px]">chats ewecontent</div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <MessageFooter />
    </div>
  </div>
</template>


<script setup lang="ts">
import { MessageHeader, MessageFooter } from "@/components/RightPanel" 
</script>


<style scoped>
.chats-content {
  @apply h-full w-full bg-cover bg-no-repeat bg-center overflow-y-auto bg-[url('@/assets/images/bg-light.png')] dark:bg-[url('@/assets/images/bg-dark.png')];
} 
</style>