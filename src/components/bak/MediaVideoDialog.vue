<template>
    <div> jhjhll;er </div>
    <!-- <Dialog :open="isOpen" @openChange="onClose">
        <DialogContent>
            <DialogDescription>Video</DialogDescription>
            <div class="w-full">
                <ReactPlayer v-if="renderedVideo" :url="renderedVideo" controls width="100%" />
            </div>
            <Button class="w-full" :disabled="isLoading" @click="sendVideo">
                {{ isLoading ? "Sending..." : "Send" }}
            </Button>
        </DialogContent>
    </Dialog> -->
</template>

<script setup lang="ts">
// import { computed } from "vue";
// import Dialog from "../ui/Dialog.vue";
// import DialogContent from "../ui/DialogContent.vue";
// import DialogDescription from "../ui/DialogDescription.vue";
// import Button from "../ui/Button.vue";
// import ReactPlayer from "react-player/vue";

// const props = defineProps({
//     isOpen: Boolean,
//     onClose: Function,
//     selectedVideo: File,
//     isLoading: Boolean,
//     sendVideo: Function,
// });

// const renderedVideo = computed(() => {
//     return URL.createObjectURL(new Blob([props.selectedVideo], { type: "video/mp4" }));
// });
</script>
