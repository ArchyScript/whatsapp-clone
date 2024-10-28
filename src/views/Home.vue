<script setup lang="ts">
import { ref } from "vue"
import { SideBar, LeftPanel, RightPanel } from '@/components/layout'

// State to manage selected chat
const selectedChat = ref(false);

// Function to select a chat
const selectChat = () => {
    selectedChat.value = true;
}

// Function to go back to the left panel
const goBack = () => {
    selectedChat.value = false;
}
</script>

<template>
    <div class='bg-[#0C1317] my-6 container mx-auto  '>
        <div class='flex overflow-y-hidden h-[calc(100vh-48px)]   min-w-[768px]     bg-[#202C33]  mx-auto   '>
            <!--  max-w-screen-2xl  -->
            <div class='fixed top-0 left-0 w-full h-36 bg-[#0C1317]  -z-30  ' />

            <section class="h-full w-1/3 flex min-w-[420px] ">
                <div class="w-16 h-full px-3 ">
                    <SideBar />
                </div>

                <div class="h-full flex-1 truncate">
                    <LeftPanel />
                </div>
            </section>

            <!-- Right panel -->
            <section class="h-full  flex-1">
                <RightPanel />
            </section>
        </div>
    </div>
</template>