<template>
  <div class="flex items-center justify-between  text-white px-6 py-1  ">
    <h4 class="text-xl font-semibold w-full">{{ title }}</h4>

    <slot name="right-side"/> 
  </div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue';

const props = defineProps({
  title: String,
});
</script>
