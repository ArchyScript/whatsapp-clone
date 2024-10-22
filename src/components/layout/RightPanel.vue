<template>
  <div class="w-full h-full flex flex-col overflow-auto">
    <NoChat />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { NoChat } from '@/components/RightPanel'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Video, X } from 'lucide-vue-next'; // Assuming you're using Lucide Vue
// import MessageInput from './message-input.vue';
// import MessageContainer from './message-container.vue';
// import ChatPlaceHolder from '@/components/home/chat-placeholder.vue';
// import GroupMembersDialog from './group-members-dialog.vue';
// import { useConversationStore } from '@/store/chat-store';
// import { useConvexAuth } from 'convex-vue'; // Assuming the equivalent package exists for Vue

// const conversationStore = useConversationStore();
// const { selectedConversation, setSelectedConversation } = conversationStore;
// const { isLoading } = useConvexAuth();

// const conversationName = computed(() => selectedConversation?.groupName || selectedConversation?.name);
// const conversationImage = computed(() => selectedConversation?.groupImage || selectedConversation?.image);

// const clearSelectedConversation = () => {
//   setSelectedConversation(null);
// };
</script>
