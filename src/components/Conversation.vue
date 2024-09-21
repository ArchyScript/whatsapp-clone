<template>
    <div>
        <!-- <div class="flex gap-2 items-center p-3 hover:bg-chat-hover cursor-pointer"
        :class="{ 'bg-gray-tertiary': isActive }" @click="setSelectedConversation(conversation)"> -->
        <!-- <Avatar class="border border-gray-900 overflow-visible relative">
            <div v-if="conversation.isOnline"
                class="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground" />
            <AvatarImage :src="conversationImage || '/placeholder.png'" class="object-cover rounded-full" />
            <AvatarFallback>
                <div class="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
            </AvatarFallback>
        </Avatar>
        <div class="w-full">
            <div class="flex items-center">
                <h3 class="text-sm font-medium">{{ conversationName }}</h3>
                <span class="text-xs text-gray-500 ml-auto">
                    {{ formatDate(lastMessage?._creationTime || conversation._creationTime) }}
                </span>
            </div>
            <p class="text-[12px] mt-1 text-gray-500 flex items-center gap-1">
                <MessageSeenSvg v-if="lastMessage?.sender === me?._id" />
                <Users v-if="conversation.isGroup" size="16" />
                <span v-if="!lastMessage">Say Hi!</span>
                <span v-if="lastMessageType === 'text'">
                    {{ lastMessage?.content.length > 30 ? `${lastMessage?.content.slice(0, 30)}...` :
                    lastMessage?.content }}
                </span>
                <ImageIcon v-if="lastMessageType === 'image'" size="16" />
                <VideoIcon v-if="lastMessageType === 'video'" size="16" />
            </p>
        </div>
        <hr class="h-[1px] mx-10 bg-gray-primary" /> -->
        gnmegheruj
    <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import { useQuery } from 'convex/react';
// import { api } from '../../../convex/_generated/api';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { MessageSeenSvg } from '@/lib/svgs';
// import { ImageIcon, Users, VideoIcon } from 'lucide-react';
// import { useConversationStore } from '@/store/chat-store';
// import { formatDate } from '@/lib/utils';

// const props = defineProps({
//     conversation: {
//         type: Object,
//         required: true,
//     },
// });

// const { setSelectedConversation, selectedConversation } = useConversationStore();
// const me = useQuery(api.users.getMe);

// const conversationImage = props.conversation.groupImage || props.conversation.image;
// const conversationName = props.conversation.groupName || props.conversation.name;
// const lastMessage = props.conversation.lastMessage;
// const lastMessageType = lastMessage?.messageType;
// const isActive = computed(() => selectedConversation?._id === props.conversation._id);
</script>
