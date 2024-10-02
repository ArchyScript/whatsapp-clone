// src/stores/appStore.ts
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  // Reactive state
  const activeTab = ref<string | null>('chats');
 

  // Function to set the active tab
  const setActiveTab = (tab: string) => {
    activeTab.value = tab;
  };

  // Function to reset the active tab
  const resetActiveTab = () => {
    activeTab.value = null;
  };

  return {
    activeTab, 
    setActiveTab,
    resetActiveTab,
  };
});
