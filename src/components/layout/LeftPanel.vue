<template>
  <div class="h-full bg-[#111B21]  ">
    <Chats v-if="activePanel = 'chats'" />
    <Communities v-if="activePanel = 'channels'" />
    <Status v-if="activePanel = 'status'" />
    <Settings v-if="activePanel = 'settings'" />
    <Channels v-if="activePanel = 'communities'" />
    <Profile v-if="activePanel = 'profile'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Chats, Communities, Status, Settings, Channels, Profile } from '@/components/leftPanel'

const activePanel = ref('chats') 
</script>
