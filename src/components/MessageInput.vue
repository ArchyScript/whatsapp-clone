<template>
    <div class="bg-gray-primary p-2 flex gap-4 items-center">
        ewewe3234545ew ww ewew wg wew
        <!-- <div class="relative flex gap-2 ml-2"> 
            <div ref="emojiRef" @click="setIsComponentVisible(true)">
                <EmojiPicker v-if="isComponentVisible" :theme="Theme.DARK" @emoji-click="handleEmojiClick"
                    style="position: absolute; bottom: 1.5rem; left: 1rem; z-index: 50;" />
                <Laugh class="text-gray-600 dark:text-gray-400" />
            </div>
 
            <MediaDropdown />
        </div>

        <form @submit.prevent="handleSendTextMsg" class="w-full flex gap-3">
            <div class="flex-1">
                <Input type="text" placeholder="Type a message"
                    class="py-2 text-sm w-full rounded-lg shadow-sm bg-gray-tertiary focus-visible:ring-transparent"
                    v-model="msgText" />
            </div>
            <div class="mr-4 flex items-center gap-3">
                <Button v-if="msgText.length > 0" type="submit" size="sm"
                    class="bg-transparent text-foreground hover:bg-transparent">
                    <Send />
                </Button>
                <Button v-else type="submit" size="sm" class="bg-transparent text-foreground hover:bg-transparent">
                    <Mic />
                </Button>
            </div>
        </form> -->
    </div>
</template>

<script setup lang="ts">
// import { ref, reactive } from 'vue';
// import { useQuery, useMutation } from '@convex/vue';
// import { api } from '@/convex/_generated/api';
// import { Laugh, Mic, Plus, Send } from 'lucide-vue-next';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import EmojiPicker, { Theme } from 'emoji-picker-vue';
// import MediaDropdown from './media-dropdown';
// import { useConversationStore } from '@/store/chat-store';
// import { useToast } from 'vue-toastification';
// import useComponentVisible from '@/hooks/useComponentVisible';

// const { selectedConversation } = useConversationStore();
// const { emojiRef, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
// const msgText = ref('');
// const me = useQuery(() => api.users.getMe());
// const sendTextMsg = useMutation(api.messages.sendTextMessage);
// const toast = useToast();

// const handleSendTextMsg = async () => {
//     if (!selectedConversation || !msgText.value.trim()) return;
//     try {
//         await sendTextMsg({
//             content: msgText.value,
//             conversation: selectedConversation._id,
//             sender: me.value._id
//         });
//         msgText.value = '';
//     } catch (err) {
//         toast.error('Failed to send message');
//         console.error(err);
//     }
// };

// const handleEmojiClick = (emojiObject) => {
//     msgText.value += emojiObject.emoji;
// };
</script>
