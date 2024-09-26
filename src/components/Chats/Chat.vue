<template>
  <div class="flex items-center      hover:bg-[#2A3942] cursor-pointer">
    <!-- Image container -->
    <div class="p-3">
      <!-- Chat -->
      <div class="flex-shrink-0 w-12 h-12" v-if="chat.isChat">
        <img class="w-full h-full rounded-full object-cover" alt="Profile" :src="chat?.images?.profile" />
      </div>

      <!-- Group Chats  -->
      <div v-if="chat.isGroup" class=" w-12 h-12">
        <!-- GROUP IN COMMUNITY  -->
        <div v-if="chat.isCommunity" class="relative flex items-center space-x-2   w-full h-full">
          <!-- Community image -->
          <img :alt="chat?.communityName" draggable="false" class="absolute top-0 h-7 w-7   rounded-lg object-cover"
            :src="chat?.images?.communityImage" />

          <!-- Group in Community Image -->
          <img :alt="chat?.communityName" draggable="false"
            class="absolute bottom-0 right-0 h-8 w-8   rounded-full object-cover" :src="chat?.images?.groupImage" />
        </div>

        <!-- GROUP WITHOUT COMMUNITY  -->
        <div v-else class="flex-shrink-0 w-full h-full">
          <img class="w-full h-full rounded-full object-cover" alt="Profile" :src="chat?.images?.groupImage" />
        </div>
      </div>
    </div>

    <!-- Text content -->
    <div class="flex-grow text-white border-b baorder-gray-700 p-3 pl-0 ">
      <!-- Chat -->
      <div v-if="chat.isChat">
        <div class="flex justify-between items-center" v-if="chat.isChat">
          <h5 class="font-bold ">{{ chat.contactName }}</h5>
          <span class="text-sm ">{{ chat.time }}</span>
        </div>

        <div class="flex justify-between items-center">
          <p class="flex-1 text-gray-500 flex items-center  ">
            <Icon :name="chatClasses[chat.status].icon" class="!h-[18px]" :class="chatClasses[chat.status].class" />
            <span class="font-medium">{{ chat.lastMessage?.content }}</span>
          </p>

          <div class="flex space-x-2 items-center">
            <!-- Pin icon -->
            <Icon name="pin" class="!h-3.5 !w-3.5" v-if="chat.isPinned" />
            <!-- unread message -->
            <span class="inline-block bg-red-500 text-white text-xs font-semibold leading-none rounded-full px-2 py-1">
              {{ chat.unreadMessages }}
            </span>
          </div>
        </div>
      </div>


      <!-- Group Chats  -->
      <div class=" " v-if="chat.isGroup">
        <div class="flex items-center justify-between" v-if="chat.isCommunity">
          <span class="text-sm font-medium" title="Sleekware" aria-label="">{{ chat.communityName }}</span>
          <div class="text-xs text-gray-500">{{ chat.time }}</div>
        </div>

        <div class="flex justify-between items-center">
          <h5 class="font-bold ">Node.JS Africa</h5>
          <span class="text-sm ">Yesterday</span>
        </div>

        <!-- Last message -->
        <!-- <div class="flex justify-between items-center">
          <p class="flex-1 text-gray-500">
            ~ cookingApps: <span class="font-medium">Nnb</span>
          </p>

          <div class="flex space-x-2 items-center"> 
            <Icon name="pin" class="!h-3.5 !w-3.5" /> 
            <div role="gridcell" aria-colindex="1" class="flex items-center justify-center">
              <span>
                <div class="transform scale-100 opacity-100">
                  <span
                    class="inline-block bg-red-500 text-white text-xs font-semibold leading-none rounded-full px-2 py-1"
                    aria-label="3 unread messages">
                    3
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
type ChatStatus = 'sent' | 'read' | 'delivered';
type Chat = {
  isChat: boolean;
  isGroup: boolean;
  isCommunity?: boolean;
  communityName?: string; // Only for groups that are part of a community
  groupName?: string; // For groups
  contactName?: string; // For normal chats
  lastMessage: {
    sender: string;
    content: string;
  };
  time: string;
  lastSeen: string;
  status: ChatStatus;
  unreadMessages: number;
  images: {
    communityImage?: string; // For groups in a community
    groupImage?: string; // For groups
    profile?: string; // For normal chats
  };
  isPinned: boolean;
};
interface Props {
  chat: Chat;
}
defineProps<Props>()



const chatClasses: Record<ChatStatus, { class: string; icon: string }> = {
  sent: {
    class: 'text-gray-500',
    icon: 'status-check'
  },
  delivered: {
    class: 'text-gray-500',
    icon: 'status-dblcheck'
  },
  read: {
    class: 'text-blue-500',
    icon: 'status-dblcheck'
  },
} 
</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
