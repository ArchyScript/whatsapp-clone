<template>
    <div>
        hjer;le'po
    </div>
    <!-- <Dialog>
        <template #trigger>
            <p class="text-xs text-muted-foreground text-left">See members</p>
        </template>
<DialogContent>
    <DialogHeader>
        <DialogTitle class="my-2">Current Members</DialogTitle>
        <DialogDescription>
            <div class="flex flex-col gap-3">
                <div v-for="user in users" :key="user._id" class="flex gap-3 items-center p-2 rounded">
                    <Avatar class="overflow-visible">
                        <template v-if="user.isOnline">
                                    <div
                                        class="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-foreground" />
                                </template>
                        <AvatarImage :src="user.image" class="rounded-full object-cover" />
                        <AvatarFallback>
                            <div class="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
                        </AvatarFallback>
                    </Avatar>

                    <div class="w-full">
                        <div class="flex items-center gap-2">
                            <h3 class="text-md font-medium">
                                {{ user.name || user.email.split("@")[0] }}
                            </h3>
                            <Crown v-if="user._id === selectedConversation.admin" size="16" class="text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
        </DialogDescription>
    </DialogHeader>
</DialogContent>
</Dialog> -->
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
// import { Crown } from "lucide-vue";
// import { useQuery } from "@convex/vue";
// import { api } from "@/convex/_generated/api";
// import Avatar from "../ui/Avatar.vue";
// import AvatarImage from "../ui/AvatarImage.vue";
// import AvatarFallback from "../ui/AvatarFallback.vue";
// import Dialog from "../ui/Dialog.vue";
// import DialogContent from "../ui/DialogContent.vue";
// import DialogDescription from "../ui/DialogDescription.vue";
// import DialogHeader from "../ui/DialogHeader.vue";
// import DialogTitle from "../ui/DialogTitle.vue";

// const props = defineProps({
//     selectedConversation: {
//         type: Object,
//         required: true,
//     },
// });

// const users = useQuery(() => api.users.getGroupMembers({ conversationId: props.selectedConversation._id }));
</script>
