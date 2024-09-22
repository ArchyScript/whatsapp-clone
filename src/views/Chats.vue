<script setup lang="ts">
import SideBar from '../components/layout/SideBar.vue'
import LeftPanel from '../components/layout/LeftPanel.vue'
import RightPanel from '../components/layout/RightPanel.vue'
// <ChatsPage />

</script>

<template>
    <div class='bg-[#0C1317] my-6  '>
        <div
            class='flex overflow-y-hidden h-[calc(100vh-48px)]   min-w-[7 68px]  max-w-screen-2xl     bg-[#202C33]  mx-auto   '>
            <!-- <div class='fixed top-0 left-0 w-full h-36 bg-[#0C1317]  -z-30  ' /> -->

            <section class="h-full w-1/3 flex">
                <div class="w-16 h-full px-3 ">
                    <SideBar />
                </div>

                <div class="h-full flex-1 ">
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
