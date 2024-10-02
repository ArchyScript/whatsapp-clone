<template>
  <div class="sticky py-2  ">

    <LeftPanelTitle title="Status">
      <template #right-side>
        <div class="flex space-x-3">
          <span class="" role="button">
            <Icon name="plus" />
          </span>

          <span class=" " role="button">
            <Icon name="menu" />
          </span>
        </div>
      </template>
    </LeftPanelTitle>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LeftPanelTitle } from "@/components/Common"

</script>
