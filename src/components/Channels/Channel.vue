<template>
  <div class="flex items-center max-w-  truncate   hover:bg-[#2A3942] cursor-pointer">
    <!-- Image container -->
    <div class="p-3 flex-shrink-0 size-fit">
      <img class="size-12 rounded-full object-cover" alt="Profile" :src="channel.imageUrl" />
    </div>

    <!-- Text content -->
    <div v-if="channel.followed" class="flex-grow truncate text-white border-t border-gray-700 p-3 pl-0">
      <div class="flex justify-between items-center truncate">
        <h5 class="font-bold ">{{ channel.name }}</h5>
        <span class="text-sm ">{{ channel.time }}</span>
      </div>

      <div class="flex justify-between items-center truncate">
        <p class="flex-1 text-gray-500 flex items-center  truncate">
          <Icon v-show="channel?.lastMessage?.type !== 'text'" :name="channelIcons[channel?.lastMessage?.type].icon"
            class="!h-[18px]" />

          <span class="font-medium truncate">{{ channel.lastMessage?.content }}</span>
        </p>

        <div class="flex space-x-2 items-center">
          <!-- Pin icon -->
          <Icon name="pin" class="!h-3.5  " v-if="channel.isPinned" />
          <!-- unread message -->
          <UnreadMessageCount :isRead="channel.isRead" :message="channel.unreadMessages" />
        </div>
      </div>
    </div>

    <div v-else class="flex-grow flex items-center truncate text-white border-t border-gray-700 p-3 pl-0">
      <div class="flex-1  truncate space-y-1">
        <div class="flex items-center space-x-2">
          <h5 class="font-bold ">{{ channel.name }}</h5>

          <Icon name="psa-verified" class="text-[#057D3D]   !h-3.5 " />
        </div>
        <p class=" text-gray-500 flex items-center  truncate">
          {{ channel.numberOfFollowers }} follwers
        </p>
      </div>

      <div class="flex justify-between items-center truncate">
        <button
          class="border border-gray-700 text-[#057D3D] px-3 cursor-pounter py-1.5 rounded-2xl font-medium text-sm">follow
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, } from 'vue'
import { UnreadMessageCount, } from "@/components/common"
import type { ChannelType, ChannelMessageType } from "@/types"

defineProps<{ channel: ChannelType }>()

const channelIcons: Record<ChannelMessageType, { icon: string }> = {
  text: { icon: 'empty' },
  image: { icon: 'status-image' },
  audio: { icon: 'status-audio' },
  video: { icon: 'status-check' },
}


</script>

<style scoped></style>
