<template>
  <div class="w-full flex flex-col">
    <div class="w-full sticky top-0 z-50">
      <!-- Header -->
      <div class="flex justify-between bg-gray-primary p-3">
        <div class="flex gap-3 items-center">
          <Avatar>
            jhkdd
            <!-- <AvatarImage :src="conversationImage || '/placeholder.png'" class="object-cover" /> -->
            <AvatarFallback>
              <div class="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
            </AvatarFallback>
          </Avatar>
          <div class="flex flex-col"> wewwee
            <!-- <p>{{ conversationName }}</p>
            <GroupMembersDialog v-if="selectedConversation.isGroup" :selectedConversation="selectedConversation" /> -->
          </div>
        </div>

        <div class="flex items-center gap-7 mr-5">
          <a href="/video-call" target="_blank">
            <Video size="23" />
          </a>
          jker
          <!-- <X size="16" class="cursor-pointer" @click="clearSelectedConversation" /> -->
        </div>
      </div>
    </div>

    <!-- CHAT MESSAGES -->
    <MessageContainer />

    <!-- INPUT -->
    <MessageInput />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
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
