<template>
    <div class="w-full h-full  flex flex-col justify-between space-y-6   ">
        <div class="flex  flex-col items-center space-y-3 bg-white">
            <div v-for="x in 4 ">
                <MessageSquare />
                <Icon name="status" />
            </div>
        </div>

        <div class="flex  flex-col items-center space-y-3 bg-white">
            <div v-for="x in 2 ">
                <MessageSquare />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { MessageSquare, MessageSquareText, Circle, MessageCircleMore } from 'lucide-vue-next';
// import { Search, ListFilter } from "lucide-vue";
// import UserButton from "@clerk/clerk-vue/dist/components/UserButton.vue";
// import Input from "../ui/Input.vue";
// import ThemeSwitch from "../ThemeSwitch.vue";
// import UserListDialog from "./UserListDialog.vue";
// import Conversation from "../Conversation.vue";
// import { useConvexAuth, useQuery } from "@convex/vue";
// import { api } from "@/convex/_generated/api";
// import { useConversationStore } from "@/store/chat-store";

// Convex auth and conversations query
// const { isAuthenticated, isLoading } = useConvexAuth();
// const conversations = useQuery(() =>
//     isAuthenticated.value ? api.conversations.getMyConversations() : "skip"
// );

// // Conversation store
// const { selectedConversation, setSelectedConversation } = useConversationStore();

// // Watch for conversation updates
// watchEffect(() => {
//     const conversationIds = conversations?.value?.map((conv) => conv._id);
//     if (selectedConversation.value && conversationIds && !conversationIds.includes(selectedConversation.value._id)) {
//         setSelectedConversation(null);
//     }
// });
</script>
