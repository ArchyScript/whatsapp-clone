// src/stores/appStore.ts
import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useAppStore = defineStore("app", () => {
  // Reactive state
  const activeTab = ref<string | null>("chats")
  const selectedChat = ref<string | null>("chats")
  const showChat = ref<boolean>(true)

  // Function to set the active tab
  const setActiveTab = (tab: string) => {
    activeTab.value = tab
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
    setShowChat
  }
})
