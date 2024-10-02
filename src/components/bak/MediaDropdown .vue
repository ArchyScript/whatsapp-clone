<template>
    <div>
        ghjm,.nhjkl,.
        <!-- <input type="file" ref="imageInput" accept="image/*" @change="handleImageSelect" hidden />
        <input type="file" ref="videoInput" accept="video/mp4" @change="handleVideoSelect" hidden />

        <MediaImageDialog v-if="selectedImage" :isOpen="selectedImage !== null" @close="selectedImage = null"
            :selectedImage="selectedImage" :isLoading="isLoading" @sendImage="handleSendImage" />
        <MediaVideoDialog v-if="selectedVideo" :isOpen="selectedVideo !== null" @close="selectedVideo = null"
            :selectedVideo="selectedVideo" :isLoading="isLoading" @sendVideo="handleSendVideo" />

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Plus class="text-gray-600 dark:text-gray-400" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem @click="openImageInput">
                    <ImageIcon size="18" class="mr-1" /> Photo
                </DropdownMenuItem>
                <DropdownMenuItem @click="openVideoInput">
                    <Video size="20" class="mr-1" /> Video
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu> -->
    </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import { Plus, ImageIcon, Video } from "lucide-vue";
// import MediaImageDialog from "./MediaImageDialog.vue";
// import MediaVideoDialog from "./MediaVideoDialog.vue";
// import { useMutation, useQuery } from "@convex/vue";
// import { api } from "@/convex/_generated/api";
// import { useConversationStore } from "@/store/chat-store";
// import DropdownMenu from "../ui/DropdownMenu.vue";
// import DropdownMenuTrigger from "../ui/DropdownMenuTrigger.vue";
// import DropdownMenuContent from "../ui/DropdownMenuContent.vue";
// import DropdownMenuItem from "../ui/DropdownMenuItem.vue";
// import { toast } from "vue-toastification";

// const imageInput = ref(null);
// const videoInput = ref(null);
// const selectedImage = ref(null);
// const selectedVideo = ref(null);
// const isLoading = ref(false);

// const { selectedConversation } = useConversationStore();
// const generateUploadUrl = useMutation(() => api.conversations.generateUploadUrl());
// const sendImage = useMutation(() => api.messages.sendImage());
// const sendVideo = useMutation(() => api.messages.sendVideo());
// const me = useQuery(() => api.users.getMe());

// const openImageInput = () => {
//     imageInput.value.click();
// };

// const openVideoInput = () => {
//     videoInput.value.click();
// };

// const handleImageSelect = (event) => {
//     selectedImage.value = event.target.files[0];
// };

// const handleVideoSelect = (event) => {
//     selectedVideo.value = event.target.files[0];
// };

// const handleSendImage = async () => {
//     isLoading.value = true;
//     try {
//         const postUrl = await generateUploadUrl();
//         const result = await fetch(postUrl, {
//             method: "POST",
//             headers: { "Content-Type": selectedImage.value.type },
//             body: selectedImage.value,
//         });
//         const { storageId } = await result.json();
//         await sendImage({
//             conversation: selectedConversation.value._id,
//             imgId: storageId,
//             sender: me.value._id,
//         });
//         selectedImage.value = null;
//     } catch (err) {
//         toast.error("Failed to send image");
//     } finally {
//         isLoading.value = false;
//     }
// };

// const handleSendVideo = async () => {
//     isLoading.value = true;
//     try {
//         const postUrl = await generateUploadUrl();
//         const result = await fetch(postUrl, {
//             method: "POST",
//             headers: { "Content-Type": selectedVideo.value.type },
//             body: selectedVideo.value,
//         });
//         const { storageId } = await result.json();
//         await sendVideo({
//             conversation: selectedConversation.value._id,
//             videoId: storageId,
//             sender: me.value._id,
//         });
//         selectedVideo.value = null;
//     } catch (err) {
//         toast.error("Failed to send video");
//     } finally {
//         isLoading.value = false;
//     }
// };
</script>
