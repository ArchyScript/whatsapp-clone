<template>
  <div> lk wiuew weuwlk </div>
  <!-- <Dialog>
    <DialogTrigger>
      <MessageSquareDiff size="20" />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogClose ref="dialogCloseRef" />
        <DialogTitle>USERS</DialogTitle>
      </DialogHeader>

      <DialogDescription>Start a new chat</DialogDescription>

      <div v-if="renderedImage" class="w-16 h-16 relative mx-auto">
        <img :src="renderedImage" alt="user image" class="rounded-full object-cover" />
      </div>

      <input type="file" accept="image/*" ref="imgRef" hidden @change="handleFileChange" />

      <div v-if="selectedUsers.length > 1">
        <Input v-model="groupName" placeholder="Group Name" />
        <Button class="flex gap-2" @click="triggerImageInput">
          <ImageIcon size="20" />
          Group Image
        </Button>
      </div>

      <div class="flex flex-col gap-3 overflow-auto max-h-60">
        <div
          v-for="user in users"
          :key="user._id"
          class="flex gap-3 items-center p-2 rounded cursor-pointer transition-all duration-300"
          :class="selectedUsers.includes(user._id) ? 'bg-green-primary' : ''"
          @click="toggleUserSelection(user._id)"
        >
          <Avatar class="overflow-visible">
            <div
              v-if="user.isOnline"
              class="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground"
            ></div>

            <AvatarImage :src="user.image" class="rounded-full object-cover" />
            <AvatarFallback>
              <div class="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
            </AvatarFallback>
          </Avatar>

          <div class="w-full">
            <div class="flex items-center justify-between">
              <p class="text-md font-medium">{{ user.name || user.email.split('@')[0] }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button :disabled="isLoading || !canCreateConversation" @click="handleCreateConversation">
          <div v-if="isLoading" class="w-5 h-5 border-t-2 border-b-2 rounded-full animate-spin"></div>
          <span v-else>Create</span>
        </Button>
      </div>
    </DialogContent>
  </Dialog> -->
</template>

<script setup lang="ts">
// import { ref, reactive, computed, watch } from 'vue';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { ImageIcon, MessageSquareDiff } from 'lucide-vue-next';
// import { useConversationStore } from '@/store/chat-store';
// import { useMutation, useQuery } from 'convex-vue';
// import { api } from '@/convex/_generated/api';
// import { toast } from 'vue-toastification';

// // Reactive state for the dialog component
// const state = reactive({
//   selectedUsers: [] as string[],
//   groupName: '',
//   isLoading: false,
//   selectedImage: null as File | null,
//   renderedImage: '',
// });

// // Refs
// const imgRef = ref<HTMLInputElement | null>(null);
// const dialogCloseRef = ref<HTMLButtonElement | null>(null);

// // Convex Mutations and Queries
// const createConversation = useMutation(api.conversations.createConversation);
// const generateUploadUrl = useMutation(api.conversations.generateUploadUrl);
// const me = useQuery(api.users.getMe);
// const users = useQuery(api.users.getUsers);

// // Store
// const { setSelectedConversation } = useConversationStore();

// const canCreateConversation = computed(() => {
//   return state.selectedUsers.length > 0 && (state.selectedUsers.length === 1 || state.groupName);
// });

// // File handling
// const triggerImageInput = () => {
//   imgRef.value?.click();
// };

// const handleFileChange = (event: Event) => {
//   const file = (event.target as HTMLInputElement).files?.[0] || null;
//   state.selectedImage = file;
// };

// const toggleUserSelection = (userId: string) => {
//   if (state.selectedUsers.includes(userId)) {
//     state.selectedUsers = state.selectedUsers.filter(id => id !== userId);
//   } else {
//     state.selectedUsers.push(userId);
//   }
// };

// const handleCreateConversation = async () => {
//   if (state.selectedUsers.length === 0) return;
//   state.isLoading = true;

//   try {
//     const isGroup = state.selectedUsers.length > 1;
//     let conversationId;

//     if (!isGroup) {
//       conversationId = await createConversation({
//         participants: [...state.selectedUsers, me?._id],
//         isGroup: false,
//       });
//     } else {
//       const postUrl = await generateUploadUrl();
//       await fetch(postUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': state.selectedImage?.type! },
//         body: state.selectedImage,
//       });

//       conversationId = await createConversation({
//         participants: [...state.selectedUsers, me?._id],
//         isGroup: true,
//         admin: me?._id,
//         groupName: state.groupName,
//       });
//     }

//     dialogCloseRef.value?.click();
//     resetForm();

//     // Set the selected conversation in store
//     const conversationName = isGroup
//       ? state.groupName
//       : users?.find(user => user._id === state.selectedUsers[0])?.name;

//     setSelectedConversation({
//       _id: conversationId,
//       participants: state.selectedUsers,
//       isGroup,
//       image: isGroup ? state.renderedImage : users?.find(user => user._id === state.selectedUsers[0])?.image,
//       name: conversationName,
//       admin: me?._id,
//     });
//   } catch (error) {
//     toast.error('Failed to create conversation');
//     console.error(error);
//   } finally {
//     state.isLoading = false;
//   }
// };

// // Reset form after creating a conversation
// const resetForm = () => {
//   state.selectedUsers = [];
//   state.groupName = '';
//   state.selectedImage = null;
//   state.renderedImage = '';
// };

// // FileReader to display the selected image
// watch(() => state.selectedImage, (newImage) => {
//   if (!newImage) return (state.renderedImage = '');

//   const reader = new FileReader();
//   reader.onload = e => (state.renderedImage = e.target?.result as string);
//   reader.readAsDataURL(newImage);
// });
</script>
