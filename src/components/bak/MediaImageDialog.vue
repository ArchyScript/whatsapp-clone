<template>
    <div> hkjl;;' lker e/.re </div>
    <!-- <Dialog :open="isOpen" @openChange="onClose">
        <DialogContent>
            <DialogDescription class="flex flex-col gap-10 justify-center items-center">
                <img v-if="renderedImage" :src="renderedImage" width="300" height="300" alt="selected image" />
                <Button class="w-full" :disabled="isLoading" @click="sendImage">
                    {{ isLoading ? "Sending..." : "Send" }}
                </Button>
            </DialogDescription>
        </DialogContent>
    </Dialog> -->
</template>

<script setup lang="ts">
// import { ref, watchEffect } from "vue";
// import Dialog from "../ui/Dialog.vue";
// import DialogContent from "../ui/DialogContent.vue";
// import DialogDescription from "../ui/DialogDescription.vue";
// import Button from "../ui/Button.vue";

// const props = defineProps({
//     isOpen: Boolean,
//     onClose: Function,
//     selectedImage: File,
//     isLoading: Boolean,
//     sendImage: Function,
// });

// const renderedImage = ref(null);

// watchEffect(() => {
//     if (!props.selectedImage) return;
//     const reader = new FileReader();
//     reader.onload = (e) => (renderedImage.value = e.target.result);
//     reader.readAsDataURL(props.selectedImage);
// });
</script>
