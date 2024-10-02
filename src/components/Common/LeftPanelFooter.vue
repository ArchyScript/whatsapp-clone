<template>
  <div class="flex items-center text-gray-500 justify-center p-6">
    <Icon name="lock-small" class="!h-3" />

    <div class="text-sm ">
      Your  {{title}} are
      
      <a href="#" role="button" tabindex="0" class="text-blue-600 hover:underline" target="_blank"
        rel="noreferrer noopener">
        end-to-end encrypted
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

const props =  defineProps({ 
  title: { 
    type: String, 
    required: true
  }
})
</script>