<template>
  <div class=" h-full ">
    <!-- Header -->
    <div class="space-y-6">
      <ChatHeader />
    </div>

    <!-- Chats -->
    <div class="overflow-auto h-full pb- 32">
      <!-- Archive Counter -->
      <ArchiveCounter />

      <!-- Chats -->
      <div v-for="chat in chatData">
        <Chat :chat />
      </div>

      <ChatFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Chat, ChatFooter, ArchiveCounter, ChatHeader, } from '@/components/Chats'
type Chat = {
  isChat: boolean;
  isGroup: boolean;
  isCommunity?: boolean; // Optional for groups
  communityName?: string; // Only for groups that are part of a community
  groupName?: string; // For groups
  contactName?: string; // For normal chats
  lastMessage: {
    sender: string;
    content: string;
  };
  time: string;
  lastSeen: string;
  status: 'sent' | 'delivered' | 'read';
  unreadMessages: number;
  images: {
    communityImage?: string; // For groups in a community
    groupImage?: string; // For groups
    profile?: string; // For normal chats
  };
  isPinned: boolean;
};

const chatData: Chat[] = [
  {
    isChat: true,
    isGroup: false,
    contactName: "John Doe",
    lastMessage: {
      sender: "John Doe",
      content: "Great resources for learning React",
    },
    time: "14:20",
    lastSeen: "Today",
    status: 'read',
    unreadMessages: 9,
    images: {
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    isPinned: false,
  },
  {
    isChat: false,
    isGroup: true,
    isCommunity: true,
    communityName: "Sleekware",
    groupName: "Node.JS Africa",
    lastMessage: {
      sender: "cookingApps",
      content: "Nnb",
    },
    time: "16:55",
    lastSeen: "Yesterday",
    status: 'read',
    unreadMessages: 3,
    images: {
      communityImage: "https://randomuser.me/api/portraits/women/32.jpg",
      groupImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    isPinned: true,
  },
  {
    isChat: true,
    isGroup: false,
    contactName: "John Doe",
    lastMessage: {
      sender: "John Doe",
      content: "Grevat resources for learning ",
      // content: "Grevat resources for learning React, it a very intering tool to work with",
    },
    time: "14:20",
    lastSeen: "Today",
    status: 'delivered',
    unreadMessages: 9,
    images: {
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    isPinned: false,
  },
  {
    isChat: false,
    isGroup: true,
    isCommunity: false,
    groupName: "Figma Masters",
    lastMessage: {
      sender: "DesignPro",
      content: "Check out my new design",
    },
    time: "12:45",
    status: 'sent',
    lastSeen: "Today",
    unreadMessages: 1,
    images: {
      groupImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    isPinned: false,
  },

  {
    isChat: true,
    isGroup: false,
    contactName: "John Doe",
    lastMessage: {
      sender: "John Doe",
      content: "Great resources for learning React",
    },
    time: "14:20",
    lastSeen: "Today",
    status: 'sent',
    unreadMessages: 9,
    images: {
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    isPinned: false,
  },
]; 
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
