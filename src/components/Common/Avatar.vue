<script setup lang="ts">
const props = defineProps<{
  imageUrl?: string;
  defaultType?: 'user' | 'group' | 'community';
}>();

// Default SVG icons for each type
const defaultImages = {
  user: '/path/to/default-user-icon.svg',
  group: '/path/to/default-group-icon.svg',
  community: '/path/to/default-community-icon.svg'
};

// Determine the image to display
const imageToShow = props.imageUrl || defaultImages[props.defaultType || 'user'];
</script>

<template>
  <div class="flex-shrink-0 w-full h-full">
    <img class="w-full h-full rounded-full object-cover" alt="Profile" :src="imageToShow" />
  </div>
</template>
