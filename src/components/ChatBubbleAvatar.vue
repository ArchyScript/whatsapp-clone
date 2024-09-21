<template>
    <div>
        test now
    </div>
    <!-- <div v-if="isGroup || fromAI">
        <Avatar class="overflow-visible relative">
            <div v-if="message.sender.isOnline && isMember"
                class="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-foreground" />
            <AvatarImage :src="message.sender?.image" class="rounded-full object-cover w-8 h-8" />
            <AvatarFallback class="w-8 h-8">
                <div class="animate-pulse bg-gray-tertiary rounded-full"></div>
            </AvatarFallback>
        </Avatar>
    </div> -->
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
// // import { IMessage } from "@/store/chat-store";

// interface IMessage {
//     _id: string;
//     content: string;
//     _creationTime: number;
//     messageType: "text" | "image" | "video";
//     sender: {
//         // _id: Id<"users">;
//         image: string;
//         name?: string;
//         tokenIdentifier: string;
//         email: string;
//         _creationTime: number;
//         isOnline: boolean;
//     };
// }


// const props = defineProps({
//     message: Object as IMessage,
//     isMember: Boolean,
//     isGroup: Boolean,
//     fromAI: Boolean
// });
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
