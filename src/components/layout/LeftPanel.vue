<template>
  <div class="h-full bg-[#111B21]  ">
    <Chats />
  </div>
</template>

<script setup>
import Chats from '@/components/Chats/index.vue'


const chats = [
  {
    id: 1,
    name: "Family Group",
    image: "family_group.png",
    isGroup: true,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "Mom",
      content: "Dinner at 7?",
      time: "18:45",
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: 2,
    name: "Work Team",
    image: "work_team.png",
    isGroup: true,
    isCommunity: true, // part of a community
    isChat: true,
    community: {
      communityName: "Company Groups",
      communityImage: "company_groups.png",
    },
    lastMessage: {
      sender: "Boss",
      content: "Meeting at 9 AM tomorrow.",
      time: "17:30",
      isRead: false,
    },
    unreadCount: 2,
  },
  {
    id: 3,
    name: "John Doe",
    image: "john_doe.png",
    isGroup: false,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "John Doe",
      content: "See you tomorrow!",
      time: "15:15",
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: 4,
    name: "Gaming Buddies",
    image: "gaming_buddies.png",
    isGroup: true,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "Alex",
      content: "Who’s online tonight?",
      time: "14:05",
      isRead: false,
    },
    unreadCount: 3,
  },
  {
    id: 5,
    name: "Tech News",
    image: "tech_news.png",
    isGroup: true,
    isCommunity: true, // part of a community
    isChat: false, // Community announcements
    community: {
      communityName: "Tech News Community",
      communityImage: "tech_news_community.png",
    },
    lastMessage: {
      sender: "Admin",
      content: "New update on AI research.",
      time: "12:30",
      isRead: false,
    },
    unreadCount: 5,
  },
  {
    id: 6,
    name: "Bestie",
    image: "bestie.png",
    isGroup: false,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "Bestie",
      content: "Let’s catch up soon!",
      time: "10:20",
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: 7,
    name: "Sports Club",
    image: "sports_club.png",
    isGroup: true,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "Coach",
      content: "Training at 6 PM sharp!",
      time: "08:45",
      isRead: false,
    },
    unreadCount: 1,
  },
  {
    id: 8,
    name: "Developers Hub",
    image: "developers_hub.png",
    isGroup: true,
    isCommunity: true,
    isChat: false,
    community: {
      communityName: "Programming Communities",
      communityImage: "programming_community.png",
    },
    lastMessage: {
      sender: "Lead Developer",
      content: "New JavaScript features explained.",
      time: "07:30",
      isRead: false,
    },
    unreadCount: 10,
  },
  {
    id: 9,
    name: "Gym Buddies",
    image: "gym_buddies.png",
    isGroup: true,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "Tom",
      content: "Workout session at 5?",
      time: "06:15",
      isRead: true,
    },
    unreadCount: 0,
  },
  {
    id: 10,
    name: "Alice",
    image: "alice.png",
    isGroup: false,
    isCommunity: false,
    isChat: true,
    lastMessage: {
      sender: "Alice",
      content: "Happy Birthday!",
      time: "Yesterday 21:00",
      isRead: false,
    },
    unreadCount: 1,
  },
];


</script>
