<template>
    <div class="w-full h-full  bg-[#111B21]">
        <div class="sticky top-0 bg-left-panel z-10">
            <!-- Header -->
            <div class="flex justify-between bg-gray-primary p-3 items-center">
                <!-- <UserButton /> -->

                <div class="flex items-center gap-3">
                    test
                    <!-- <UserListDialog v-if="isAuthenticated" />
                    <ThemeSwitch /> -->
                </div>
            </div>

            <div class="p-3 flex items-center">
                <!-- Search -->
                <div class="relative h-10 mx-3 flex-1">
                    <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" size="18" />
                    <Input type="text" placeholder="Search or start a new chat"
                        class="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent" />
                </div>
                <ListFilter class="cursor-pointer" />
            </div>
        </div>
        <!-- Chat List -->
        <!-- <div class="my-3 flex flex-col gap-0 max-h-[80%] overflow-auto"> 
            <Conversation v-for="conversation in conversations" :key="conversation._id" :conversation="conversation" />

            <div v-if="conversations.length === 0" class="text-center text-gray-500 text-sm mt-3">
                <p>No conversations yet</p>
                <p>We understand you're an introvert, but you've got to start somewhere 😊</p>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
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
