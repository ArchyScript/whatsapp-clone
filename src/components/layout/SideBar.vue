<template>
    <div class="w-full h-full  flex flex-col justify-between    ">
        <div class="flex w-full flex-col items-center space-y-2   flex-1 py-2">
            <div v-for="link in sideBarLinks " class="relative" 
            > 
                 <div 
                    class="w-10 h-10 rounded-full flex justify-center items-center text-white transition duration-300 ease-in-out hover:bg-gray-700" 
                    :class="{
                        'bg-[#374248]': link.title === activeLink,
                    }"
                    @click="activeLink = link.title"
                > 
                    <Icon :name="link.icon" />
                </div>
   

     <div class="absolute z-40 left-full top-1/2 ml-2 w-max bg-white text-sm rounded-xl py-1   px-4   opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                    <p class="font-medium">{{link.title}}</p>
                </div> 
            </div>
 
        </div>

        <div class="flex  flex-col items-center space-y-3  ">
            fffdf
        </div>
    </div>
</template>

<script setup>
import { ref,   } from "vue";  

const activeLink = ref('chats')
const sideBarLinks= [
    {
        title: 'chats',
icon: 'message',  
    }, {
        title: 'status',
icon: 'status',  
    }, {
        title: 'channels',
icon: 'channels',  
    }, {
        title: 'communities',
icon: 'communities',  
    },
]
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


<style scoped>
.relative:hover .opacity-0 {
    opacity: 1;  
}
</style>