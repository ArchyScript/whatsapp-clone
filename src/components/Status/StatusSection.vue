<template>
  <div tabindex="0" role="button" class="focus:outline-none flex items-center  hover:bg-[#2A3942] ">
    <!-- Avatar Section -->
    <div class="relative   p-3 flex-shrink-0">
      <DynamicCircle :numberOfStrokes="status.numberOfStatus" />
      <img :src="status.imageUrl"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-10   bg-white rounded-full" />
    </div>


    <!-- Chat Info Section -->
    <div class="flex-1 min-w-0 space-y-1 p-3 pl-0 " :class="customClass">
      <h5 class="font-medium text-white truncate"> {{status.name}} </h5>
      <p class="text-xs text-gray-500">Today at {{status.date}} </p>
    </div>
  </div>
</template>


<script setup lang="ts">
import {  DynamicCircle } from '@/components/Status' 
import type { StatusType } from "@/types"
import type {PropType} from "vue"

 defineProps({
   status: {
    type: Object as PropType <StatusType>,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  }, 
  size: {
    type: String,
    default: '48',
  }, 
 });
</script>