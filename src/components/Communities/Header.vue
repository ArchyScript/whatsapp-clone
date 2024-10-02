<template>
  <div class="sticky py-2  ">

    <LeftPanelTitle title="Communities">
      <template #right-side> 
          <span class="" role="button">
            <Icon name="plus" />
          </span> 
      </template>
    </LeftPanelTitle> 
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LeftPanelTitle } from "@/components/common"

</script>
