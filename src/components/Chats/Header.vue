<template>
  <div class="sticky py-2 space-y-1.5">
    <div class="space-y-0.5">
      <LeftPanelTitle title="Chats">
        <template #right-side>
          <div class="flex space-x-3">
            <span class=" " role="button">
              <Icon name="new-chat-outline" />
            </span>

            <span class=" " role="button">
              <Icon name="menu" />
            </span>
          </div>
        </template>
      </LeftPanelTitle>


      <!-- Archived Button -->
      <div class="text-white relative w-full  flex items-center space-x-3 px-3 py-2" aria-label="Archived">
        <span class="flex items-center w-12 justify-center">
          <Icon name="archived-outline" />
        </span>

        <div class="flex-1 flex items-center space-x-2 ">
          <p class="font-medium text-sm ">Archived</p>

          <span class="  text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
            (5)
          </span>
        </div>
      </div>
    </div>


    <div class="space-y-2.5 px-6">
      <Search />
      <Tabs :tabs :activeTab @selectTab="(title: string) => activeTab = title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LeftPanelTitle, Search } from "@/components/Common"

const tabs = [
  { title: 'all', },
  { title: 'unread', },
  { title: 'read' }
]
const activeTab = ref('all')
</script>
