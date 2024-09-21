<template>
    <div>
        test
        <!-- <DateIndicator :message="message" :previousMessage="previousMessage" />
        <div :class="bubbleClass" class="flex gap-1 w-2/3">
            <ChatBubbleAvatar v-if="!fromMe" :isGroup="isGroup" :isMember="isMember" :message="message"
                :fromAI="fromAI" />
            <div class="flex flex-col z-20 max-w-fit px-2 pt-1 rounded-md shadow-md relative" :class="bgClass">
                <OtherMessageIndicator v-if="!fromAI" />
                <Bot v-if="fromAI" class="absolute bottom-[2px] left-2" />
                <ChatAvatarActions :message="message" :me="me" />
                <component :is="renderMessageContent" />
                <ImageDialog v-if="open" :src="message.content" :open="open" @close="open = false" />
                <MessageTime :time="time" :fromMe="fromMe" />
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { useConversationStore } from "@/store/chat-store";
// import DateIndicator from "./date-indicator";
// import ChatBubbleAvatar from "./chat-bubble-avatar";
// import ChatAvatarActions from "./chat-avatar-actions";
// import { Bot } from "lucide-react";
// import ImageDialog from "./ImageDialog"; // Import your ImageDialog component
// import VideoMessage from "./VideoMessage"; // Import VideoMessage
// import ImageMessage from "./ImageMessage"; // Import ImageMessage
// import TextMessage from "./TextMessage"; // Import TextMessage

const props = defineProps({
    message: Object,
    me: Object,
    previousMessage: Object
});

// const { selectedConversation } = useConversationStore();
// const isMember = selectedConversation?.participants.includes(message.sender?._id) || false;
// const isGroup = selectedConversation?.isGroup;
// const fromMe = message.sender?._id === me._id;
// const fromAI = message.sender?.name === "ChatGPT";
// const bgClass = fromMe ? "bg-green-chat" : !fromAI ? "bg-white dark:bg-gray-primary" : "bg-blue-500 text-white";
// const open = ref(false);

// const date = new Date(message._creationTime);
// const hour = date.getHours().toString().padStart(2, "0");
// const minute = date.getMinutes().toString().padStart(2, "0");
// const time = `${hour}:${minute}`;

// const renderMessageContent = computed(() => {
//     switch (message.messageType) {
//         case "text":
//             return TextMessage({ message });
//         case "image":
//             return ImageMessage({ message, handleClick: () => (open.value = true) });
//         case "video":
//             return VideoMessage({ message });
//         default:
//             return null;
//     }
// });
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
