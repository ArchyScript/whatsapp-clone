<template>
  <div class=" h-full truncate ">
    <SettingsHeader />

    <div class="!overflow-auto h-full pb-40 truncate ">
      <!-- Profile  -->
      <div class="flex items-center ">
        <div class="px-4 py-3 flex-shrink-0 size-fit">
          <img class="size-20 rounded-full object-cover" alt="Profile"
            src="https://randomuser.me/api/portraits/men/22.jpg" />
        </div>

        <div class="flex-1  truncate text-white ">
          <h5 class="font-bold ">ArchyScript</h5>
          <p class="  flex items-center font-light truncate">
            intro....
          </p>
        </div>
      </div>




      <!-- Settings -->
      <div>
        <div v-for="settings in appSettings" :key="settings.title"
          class="flex items-center  text-white  hover:bg-[#2A3942]  cursor-pointer ">
          <div class="px-4 py-3 size-12 flex justify-center items-center ">
            <Icon :name="settings.icon" />
          </div>

          <p class="p-4 pl-0 flex-1 class font-medium border-b border-gray-700"> {{ settings.title }} </p>
        </div>

        <div class="flex items-center  text-red-400  ">
          <div class="px-4 py-3 size-12 flex justify-center items-center ">
            <Icon name="logout" />
          </div>

          <p class="p-4 pl-0 flex-1 class font-medium border-b border-gray-700"> Logout </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { SettingsHeader, } from '@/components/Settings'

const appSettings = [
  { title: "Account", icon: 'account-circle', },
  { title: "Privacy", icon: 'security-lock', },
  { title: "Chats", icon: 'chats', },
  { title: "Notifications", icon: 'settings-notifications', },
  { title: "Keyboard  Shortcuts", icon: 'settings-keyboard', },
  { title: "Help", icon: 'help-filled', },
]
</script>


<style></style>
