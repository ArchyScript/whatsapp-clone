// src/stores/appStore.ts
import type { ChatType } from "@/types"
import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useAppStore = defineStore("app", () => {
  // Reactive state
  const activeTab = ref<string | null>("chats")
  const selectedChat = ref<ChatType>()
  const showChat = ref<boolean>(false)

  // Function to set the active tab
  const setActiveTab = (tab: string) => {
    activeTab.value = tab
  }
  const setSelectedChat = (chat: ChatType) => {
    selectedChat.value = chat
  }
  const setShowChat = (value: boolean) => {
    showChat.value = value
  }
  // Function to reset the active tab
  const resetActiveTab = () => {
    activeTab.value = null
  }

  return {
    activeTab,
    selectedChat,
    setActiveTab,
    resetActiveTab,
    showChat,
    setShowChat,
    setSelectedChat
  }
})
