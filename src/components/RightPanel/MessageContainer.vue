<template>
  <div class="space-y-0.5 relative h-full">
    <MessageHeader />

    <div class="absolute bottom-0 left-0 w-full">
      <MessageFooter />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { MessageHeader, MessageFooter } from "@/components/RightPanel"


</script>
