<template>
  <div class=" h-full truncate ">
    <ChannelsHeader />

    <!-- Channels -->
    <div class="!overflow-auto h-full pb-40 truncate ">
      <!-- Followed Channels -->
      <div>
        <div class="p-6 text-white">
          <h5 class="font-medium  flex-1 text-base">Channels </h5>
        </div>

        <div v-for="channel in followedChannels" class="">
          <Channel :channel />
        </div>
      </div>

      <!-- Other Channels -->
      <div>
        <div class="p-6 text-white">
          <h5 class=" font-medium  flex-1 text-base">Find Channels to follow </h5>
        </div>

        <div v-for="channel in unFollowedChannels" class="">
          <Channel :channel />
        </div>

        <div class="flex justify-center items-center py-5 mx-auto ">
          <button class=" bg-[#057D3D] text-[#123] px-10 py-2 cursor-pounter  rounded-3xl font-medium text-base">
            Discover more
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChannelsHeader, Channel } from '@/components/Channels'
import { channels } from "@/db"

const followedChannels = computed(() => channels.filter(channel => channel.followed))
const unFollowedChannels = computed(() => channels.filter(channel => !channel.followed))
</script>

<style></style>
