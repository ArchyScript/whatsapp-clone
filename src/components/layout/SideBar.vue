<template>
    <div class="w-full h-full  flex flex-col justify-between    ">
        <div class="flex w-full flex-col items-center space-y-3   flex-1 py-2">
            <!-- Links -->
            <div v-for="link in sideBarLinks " class="relative">
                <div class="w-10 h-10  cursor-pointer rounded-full flex justify-center items-center text-[#AEBAC1] transition duration-300 ease-in-out "
                    :class="{
                        'bg-[#374248]': link.title === activeLink,
                    }" @click="activeLink = link.title">
                    <Icon :name="activeLink === link.title ? link.icon : `${link.icon}-outline`" />
                </div>

                <!-- tooltip -->
                <!-- <Tooltip :text="link.title" /> -->

                <!-- active state -->
                <span class="absolute  inline-block right-0.5 top-0.5    h-2 w-2 rounded-full bg-green-400 ">
                </span>
            </div>

            <!-- Meta AI -->
            <div class="relative">
                <div @click="activeLink = 'meta'"
                    class="w-10 h-10  cursor-pointer rounded-full flex justify-center items-center  transition duration-300 ease-in-out ">
                    <img src="@/assets/images/meta-ai.png" class="h-6 w-6" />
                </div>

                <!-- <Tooltip text="Meta" /> -->
            </div>
        </div>

        <div class="flex w-full flex-col items-center space-y-3     py-2">
            <div class="relative">
                <div @click="activeLink = 'settings'"
                    class="w-10 h-10  cursor-pointer rounded-full flex justify-center items-center text-[#AEBAC1] hover:bg-[#374248] transition duration-300 ease-in-out ">
                    <Icon :name="activeLink === 'settings' ? 'settings' : 'settings-outline'" />
                </div>

                <!-- tooltip -->
                <!-- <Tooltip text="Settings" /> -->
            </div>

            <!-- Meta AI -->
            <div class="relative">
                <div @click="activeLink = 'profile'"
                    class="w-8 h-8  cursor-pointer rounded-full flex justify-center items-center   transition duration-300 ease-in-out ">
                    <img src="@/assets/images/bg-dark.png" class="h-full w-full rounded-full" />
                </div>
                <Tooltip text="Profile" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, } from "vue";

const activeLink = ref('chats')
const sideBarLinks = [
    {
        title: 'chats',
        icon: 'chat',
    }, {
        title: 'status',
        icon: 'status',
    }, {
        title: 'channels',
        icon: 'newsletter',
    }, {
        title: 'communities',
        icon: 'communities',
    },
]

</script>


<style scoped>
.relative:hover .opacity-0 {
    opacity: 1;
}
</style>