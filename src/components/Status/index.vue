<template>
  <div class=" h-full truncate ">
    <StatusHeader />

    <div class="!overflow-auto h-full pb-28 truncate  ">
      <!-- Auth User Status -->
      <StatusSection :status="userStatus" />

      <!-- diviver -->
      <div class="w-full bg-[#0c1317] h-2.5" />

      <!-- Recent Status -->
      <div>
        <div class="p-6 text-[#333936]">
          <h5 class="uppercase  flex-1 text-base">Recent </h5>
        </div>

        <div v-for="status in allStatus" class="">
          <StatusSection :status="status" customClass="border-t  border-gray-700" />
        </div>
      </div>


      <!-- Muted Status -->
      <div>
        <div class="p-6  text-[#333936] flex items-center justify-between  ">
          <h5 class="uppercase text-[#333936] text-base flex-1">Muted </h5>
          <span class="text-sm cursor-pointer"> show </span>
        </div>

        <div v-for="status in mutedStatus" class="">
          <StatusSection :status="status" customClass="border-t  border-gray-700" />
        </div>
      </div>

      <LeftPanelFooter title="status updates" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { StatusHeader, StatusSection, } from '@/components/Status'
import { allStatus, mutedStatus } from "@/db"
import { LeftPanelFooter } from "@/components/Common"

const userStatus = {
  numberOfStatus: 10,
  numberOfViewed: 3,
  numbersNotViewed: 7,
  name: 'John Doe',
  date: '14:20',
  imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg'
}
</script>


<style></style>
