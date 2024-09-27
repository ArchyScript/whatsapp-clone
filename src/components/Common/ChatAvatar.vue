<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  imageUrl?: string;
  isChat?: boolean;
  isGroup?: boolean;
  isCommunity?: boolean;
  groupImage?: string;
  communityImage?: string;
}>();

// Default SVG icons for each type
const defaultImages = {
  user: '/path/to/default-user-icon.svg',
  group: '/path/to/default-group-icon.svg',
  community: '/path/to/default-community-icon.svg'
};

const defaultIconType = ref('')

const defaultImage = computed(() => {
  // Infer the type of avatar based on the other props (isChat, isGroup, isCommunity)
  if (props.isCommunity) return defaultImages.community;
  else if (props.isGroup) return defaultImages.group;
  else return defaultImages.user;
});

// Determine the image to display for chat or group
const imageToShow = props.imageUrl || defaultImage.value;
</script>

<template>
  <div v-if="isChat" class="flex-shrink-0 w-12 h-12">
    <!-- Normal Chat -->
    <img class="w-full h-full rounded-full object-cover" alt="Profile" :src="imageToShow" />
  </div>

  <div v-if="isGroup" class="w-12 h-12">
    <!-- Group in a Community -->
    <div v-if="isCommunity" class="relative flex items-center space-x-2 w-full h-full">
      <!-- Community Image -->
      <img alt="Community" class="absolute top-0 h-7 w-7 rounded-lg object-cover"
        :src="communityImage || defaultImages.community" />

      <!-- Group Image in the Community -->
      <img alt="Group" class="absolute bottom-0 right-0 h-8 w-8 rounded-full object-cover"
        :src="groupImage || defaultImages.group" />
    </div>

    <!-- Group Without Community -->
    <div v-else class="flex-shrink-0 w-full h-full">
      <img class="w-full h-full rounded-full object-cover" alt="Group" :src="groupImage || defaultImages.group" />
    </div>
  </div>
</template>
