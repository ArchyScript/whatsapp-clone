<template>
  <header class="flex space-x-3 items-center px-6 py-3 bg-[#202C33]">
    <!-- back button for mobile screen alone -->
    <div class="p-1.5 pl-2 rounded-full w-10 inline-block md:hidden" role="button ">
      <Icon name="back" class="text-green-700" @click="showChat" />
    </div>

    <!-- Profile Section -->
    <div class="h-10 w-10 rounded-full border overflow-hidden flex items-center justify-center">
      <img src="@/assets/images/placeholder.png" class="h-full w-full rounded-full" />
    </div>

    <!-- Name Section -->
    <div class="flex-1 flex flex-col space-y-0.5">
      <span class="font-bold text-white">xTransferXO</span>
      <span class="text-sm text-gray-600">Boluwatife, Overcomer, +234 903 788 9592, You</span>
    </div>

    <!-- Action Buttons Section -->
    <div class="flex space-x-2 items-center">
      <div
        class="w-8 h-8 p-0.5 cursor-pointer rounded-full flex justify-center items-center border transition duration-300 ease-in-out"
      >
        <img src="@/assets/images/whatsapp.png" class="h-full w-full rounded-full" />
      </div>

      <Icon name="search-alt" />
      <Icon name="video-call" />
      <Icon name="menu" />
    </div>
    <!-- {{ selectedChat }} -->
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useAppStore } from "@/stores/app"
const { setShowChat, selectedChat } = useAppStore()
interface Emit {
  (event: "back"): void
}
const emit = defineEmits<Emit>()

const chat = computed(() => selectedChat)

const showChat = () => {
  setShowChat(false)
}
</script>
