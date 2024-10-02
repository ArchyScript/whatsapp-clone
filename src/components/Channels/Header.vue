<template>
  <div class="sticky py-2  space-y-4">

    <LeftPanelTitle title="Channels">
      <template #right-side>
        <span class="" role="button">
          <Icon name="plus" />
        </span>
      </template>
    </LeftPanelTitle>

    <div class=" px-6">
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LeftPanelTitle, Search } from "@/components/common"

</script>
