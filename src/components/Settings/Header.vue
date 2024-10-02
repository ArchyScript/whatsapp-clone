<template>
  <div class="sticky py-2  space-y-4">
    <LeftPanelTitle title="Settings" />

    <div class=" px-6">
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LeftPanelTitle, Search } from "@/components/Common"

</script>
