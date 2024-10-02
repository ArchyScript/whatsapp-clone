<template>
    <div class="relative p-3 flex-1 overflow-auto h-full bg-chat-tile-light dark:bg-chat-tile-dark">
        <!-- <div class="mx-12 flex flex-col gap-3">
            <div v-for="(msg, idx) in messages" :key="msg._id" ref="lastMessageRef">
                <ChatBubble :message="msg" :me="me" :previousMessage="idx > 0 ? messages[idx - 1] : undefined" />
            </div>
        </div> -->
        wewewe
    </div>
</template>

<script setup lang="ts">
// import { ref, onMounted, watch } from 'vue';
// import ChatBubble from './chat-bubble';
// import { useQuery } from '@convex/vue';
// import { api } from '@/convex/_generated/api';
// import { useConversationStore } from '@/store/chat-store';

// const { selectedConversation } = useConversationStore();
// const lastMessageRef = ref(null);

// // Fetch messages and current user
// const messages = useQuery(() =>
//     api.messages.getMessages({ conversation: selectedConversation._id })
// );
// const me = useQuery(() => api.users.getMe());

// const scrollToLastMessage = () => {
//     setTimeout(() => {
//         lastMessageRef.value?.scrollIntoView({ behavior: 'smooth' });
//     }, 100);
// };

// watch(messages, scrollToLastMessage);
// onMounted(scrollToLastMessage);
</script>
