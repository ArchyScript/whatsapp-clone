<script setup lang="ts">
interface Props {
  message: number;
  isRead: boolean;
}
 defineProps<Props>();
</script>

<template>
  <span v-if="!isRead"
    class="inline-block bg-red-500 text-white text-xs font-semibold leading-none rounded-full px-2 py-1">
    {{ message }}
  </span>
</template>
