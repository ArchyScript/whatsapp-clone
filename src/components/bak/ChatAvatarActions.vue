<template>
    <div class="text-[11px] flex gap-4 justify-between font-bold cursor-pointer group"
        @click="handleCreateConversation">
        <!-- <span v-if="isGroup">{{ message.sender.name }}</span>
        <Ban v-if="!isMember && !fromAI && isGroup" class="text-red-500" />
        <LogOut v-if="isGroup && isMember && selectedConversation.admin === me._id"
            class="text-red-500 opacity-0 group-hover:opacity-100" @click.stop="handleKickUser" /> -->
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// import { useConversationStore } from "@/store/chat-store";
// import { useMutation } from "convex/react";
// import { api } from "../../../convex/_generated/api";
// import { Ban, LogOut } from "lucide-react";
// import toast from "react-hot-toast";

const props = defineProps({
    message: Object,
    me: Object
});

// const { selectedConversation, setSelectedConversation } = useConversationStore();

// const isMember = selectedConversation?.participants.includes(props.message.sender._id);
// const kickUser = useMutation(api.conversations.kickUser);
// const createConversation = useMutation(api.conversations.createConversation);
// const fromAI = props.message.sender?.name === "ChatGPT";
// const isGroup = selectedConversation?.isGroup;

// const handleKickUser = async (e) => {
//     if (fromAI) return;
//     e.stopPropagation();
//     if (!selectedConversation) return;
//     try {
//         await kickUser({
//             conversationId: selectedConversation._id,
//             userId: props.message.sender._id,
//         });

//         setSelectedConversation({
//             ...selectedConversation,
//             participants: selectedConversation.participants.filter((id) => id !== props.message.sender._id),
//         });
//     } catch (error) {
//         toast.error("Failed to kick user");
//     }
// };

const handleCreateConversation = async () => {
    console.log(7878)
    // if (fromAI) return;

    // try {
    //     const conversationId = await createConversation({
    //         isGroup: false,
    //         participants: [props.me._id, props.message.sender._id],
    //     });

    //     setSelectedConversation({
    //         _id: conversationId,
    //         name: props.message.sender.name,
    //         participants: [props.me._id, props.message.sender._id],
    //         isGroup: false,
    //         isOnline: props.message.sender.isOnline,
    //         image: props.message.sender.image,
    //     });
    // } catch (error) {
    //     toast.error("Failed to create conversation");
    // }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
